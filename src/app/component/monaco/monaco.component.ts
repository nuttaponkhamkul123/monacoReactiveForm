import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit,OnDestroy,AfterViewInit  {
  mainForm : FormGroup;
  showing : boolean = false;
  epicEditor : any;
  options = { theme : 'vs-dark' , language : 'css'}
  
  constructor(private fb : FormBuilder) { }
  getEditor(editor : any) : void{
    this.epicEditor = editor;
    
  }
  onInit(editor : any) : void{
    // console.log(editor.value);
    this.epicEditor = editor;
    console.log(this.epicEditor.getModel());
    // editor.dispose();
  }
  ngOnDestroy(): void {
      // this.epicEditor.getModels();
      // console.log();
      
      // console.log(this.mainForm.dirty)
  }
  ngOnInit(): void {
    
    this.mainForm = new FormGroup({});
    this.mainForm = this.fb.group({
      monaco : ['']
    })
    console.log(this.showing);
    console.log(this.mainForm.dirty)
    // console.log(this.mainForm);
    // console.log(this.test.elementRef)
    this.mainForm.reset();
    if(this.mainForm.dirty === false){
      console.log('aaa')
      this.showing = true;
      console.log('inner : ' , this.mainForm.dirty);
      
    }
  }

  ngAfterViewInit(): void {
    this.mainForm.reset();
    console.log('after view : ' , this.mainForm);
    
  }
  

}
