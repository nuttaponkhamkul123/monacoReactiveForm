import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MonacoComponent } from './component/monaco/monaco.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  isTab1Ready = false;
  private _justSetValue: any;
  private _onChange: any;
  
  constructor(private fb : FormBuilder){
    
  }
  ngOnInit(): void {
    console.log((<any>window).monaco);
      // this.obj = JSON.stringify(this.mainForm);
  }
  emitVal(value : string) : void{
    if(value === 'tab 1 ready'){
      this.isTab1Ready = true;
    }
  }
  title = 'monaco';
  
}
