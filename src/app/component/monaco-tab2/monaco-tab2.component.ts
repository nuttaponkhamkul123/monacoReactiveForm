import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-monaco-tab2',
  templateUrl: './monaco-tab2.component.html',
  styleUrls: ['./monaco-tab2.component.scss'],
})
export class MonacoTab2Component implements OnInit {
  mainForm2: FormGroup;
  options = { theme: 'vs-dark', language: 'css' };
  isInitial = false;
  @Input() parent: FormGroup;
  constructor(private fb: FormBuilder) {}
  isFormDirty(): boolean {
    return this.mainForm2.dirty;
  }
  submit(): void {
    alert('saved successfully');
    this.mainForm2.markAsPristine();
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.mainForm2 = this.fb.group({
      monaco: [''],
    });
    this.parent.addControl('main2', this.mainForm2);
    console.log('main2 : ', this.parent);
    console.log(!this.isFormDirty());
  }
}
