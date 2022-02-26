import { AfterViewChecked, AfterViewInit, Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { EditorComponent, MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit,OnDestroy , ControlValueAccessor, AfterViewInit {
  mainForm : FormGroup;
  showing : boolean = false;
  epicEditor : any;
  private _justSetValue: any;
  private _onChange: any;
  @ViewChild('monaco') monaco : EditorComponent; 
  options = { theme : 'vs-dark' , language : 'css'}
  constructor(private fb : FormBuilder) { }
  registerOnChange (fn: any): void {
    this._onChange = fn;
    console.log('enter')
    this.monaco.registerOnChange((val: any) => {
      if(this._justSetValue === val) {
        this._justSetValue = undefined;
        return;
      }
      fn(val);
    });
  }

  registerOnTouched (fn: any): void {
    this.monaco.registerOnTouched(fn);
  }

  writeValue (val: any): void {
    if(this._onChange) {
      this._onChange(val);
      this._justSetValue = val;
    }
    this.monaco.writeValue(val);
  }
  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    this.monaco.registerOnChange(() => {
      this.mainForm.markAsPristine();
    })
  }
  ngOnInit(): void {
    this.mainForm = this.fb.group({
      monaco : ['']
    })

    
  }


  

}
