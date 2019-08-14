import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './header/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { Guide1Component } from './guide/guide1/guide1.component';
import { Guide2Component } from './guide/guide2/guide2.component';
import { Guide3Component } from './guide/guide3/guide3.component';
import { CodeEditorComponent } from './shared/code-editor/code-editor.component';
import {FormsModule} from '@angular/forms';
import { MarkdownViewerEditorComponent } from './shared/markdown-viewer-editor/markdown-viewer-editor.component';
import { GithubViewerComponent } from './shared/github-viewer/github-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import { PdfViewerComponent } from './shared/pdf-viewer/pdf-viewer.component';
import {MaterialModule} from './material/material.module';
import { ResourcesDialogComponent } from './shared/resources-dialog/resources-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DynamicGuideComponent } from './shared/dynamic-guide/dynamic-guide.component';
import { DynamicGuideResourceComponent } from './shared/dynamic-guide/dynamic-guide-resource/dynamic-guide-resource.component';
import { EditOrderDialogComponent } from './shared/edit-order-dialog/edit-order-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    Guide1Component,
    Guide2Component,
    Guide3Component,
    CodeEditorComponent,
    MarkdownViewerEditorComponent,
    GithubViewerComponent,
    PdfViewerComponent,
    ResourcesDialogComponent,
    DynamicGuideComponent,
    DynamicGuideResourceComponent,
    EditOrderDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ResourcesDialogComponent,
    EditOrderDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
