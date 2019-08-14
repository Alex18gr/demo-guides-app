import {AfterViewChecked, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as PdfJs from 'node_modules/pdfjs-dist/build/pdf.js';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit, AfterViewChecked, OnChanges {
  @ViewChild('canvasContainer', {static: false}) pdfViewContainer: ElementRef;
  @Input() title: string;
  @Input() description: string;
  @Input() pagesList: number[];
  @Input() pdfBlobData: Blob;
  @Input() url = './assets/chicken.pdf';
  @Input() pdfData: ArrayBuffer;
  @Input() loadMode = 'url';
  private pdfDoc = null;
  private pageNum = 1;
  private pageIsRendering = false;
  private pageNumIsPending = null;
  private scale = 1.5;
  private canvas: any;
  private pdfViewerContext: any;
  private totalPages: number;

  constructor() { }

  ngOnInit() {
    this.initPdfViewer();
  }

  removeElementChildren(element: ElementRef) {
    const myNode = element.nativeElement;
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }

  setViewDocument(pdfDocument) {
    console.log(pdfDocument);
    this.pdfDoc = pdfDocument;
    this.totalPages = pdfDocument.numPages;

    // this.renderPage(1);
    if (!this.pagesList) {
      this.renderPages(this.range(1, this.totalPages));
    } else {
      this.renderPages(this.pagesList);
    }

  }

  private loadPdfUrl() {
    PdfJs.getDocument(this.url).promise.then(pdfDocument => {
      this.setViewDocument(pdfDocument);
    });
  }

  private loadPdfData() {
    PdfJs.getDocument({data: this.pdfData}).promise.then(pdfDocument => {
      this.setViewDocument(pdfDocument);
    });
  }

  private initPdfViewer() {
    if (this.loadMode === 'url') {
      this.loadPdfUrl();
    } else if (this.loadMode === 'data') {
      this.loadPdfData();
    }
  }

  renderPages(pagesList: number[]) {
    this.renderPagesArray(pagesList);
  }

  renderPage(pNum: number) {
    this.pageIsRendering = true;
    this.pdfDoc.getPage(pNum).then(page => {
      let viewport = page.getViewport(1);
      const myScale = this.pdfViewContainer.nativeElement.clientWidth / viewport.width;
      // set the scale
      viewport = page.getViewport({scale: myScale});
      const mCanvas = document.createElement('canvas');
      mCanvas.style.width = '100%';
      mCanvas.style.display = 'block';
      mCanvas.height = viewport.height;
      mCanvas.width = viewport.width;
      this.pdfViewerContext = mCanvas.getContext('2d');

      const renderCtx = {
        canvasContext: this.pdfViewerContext,
        viewport
      };

      page.render(renderCtx).promise.then(() => {
        this.pageIsRendering = false;
        this.pdfViewContainer.nativeElement.appendChild(mCanvas);

        if (this.pageNumIsPending !== null) {
          this.renderPage(this.pageNumIsPending);
          this.pageNumIsPending = null;
        }
      });
    });
  }

  renderPagesArray(pagesArr: number[]) {
    // indicated that the page is rendering
    this.pageIsRendering = true;
    const renderingPage = pagesArr.shift();

    // get the page from the pdf document in order to render it
    this.pdfDoc.getPage(renderingPage).then(page => {
      let viewport = page.getViewport(1);
      const myScale = this.pdfViewContainer.nativeElement.clientWidth / viewport.width;
      // set the scale to the dynamic scale based on the element and viewport width
      viewport = page.getViewport({scale: myScale});
      const mCanvas = document.createElement('canvas');
      mCanvas.style.width = '100%';
      mCanvas.style.display = 'block';
      mCanvas.height = viewport.height;
      mCanvas.width = viewport.width;
      this.pdfViewerContext = mCanvas.getContext('2d');

      const renderCtx = {
        canvasContext: this.pdfViewerContext,
        viewport
      };

      page.render(renderCtx).promise.then(() => {
        // when finishing the rendering
        this.pageIsRendering = false;
        // append the child canvas to the canvas container with the other pages
        this.pdfViewContainer.nativeElement.appendChild(mCanvas);

        // set the pending number page to null because the rendering is finished
        if (pagesArr.length > 0) {
          this.renderPagesArray(pagesArr);
        }
      });
    });
  }

  private range(start, end) {
    // @ts-ignore
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }

  ngAfterViewChecked(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if ((changes.pdfData || changes.url) &&
      (changes.pdfData.currentValue !== changes.pdfData.previousValue ||
        changes.url.currentValue !== changes.url.previousValue)) {
      this.initPdfViewer();
    }
  }
}
