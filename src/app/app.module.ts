import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonacoComponent } from './component/monaco/monaco.component';
import { MonacoTab2Component } from './component/monaco-tab2/monaco-tab2.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

const monacoConfig: NgxMonacoEditorConfig = {
  defaultOptions: { theme: 'vs-dark', language: 'javascript' },
};

@NgModule({
  declarations: [AppComponent, MonacoComponent, MonacoTab2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(monacoConfig),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
