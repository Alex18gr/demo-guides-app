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
    GithubViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
