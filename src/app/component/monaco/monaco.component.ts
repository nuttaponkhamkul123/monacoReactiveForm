import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss'],
})
export class MonacoComponent implements OnInit, OnDestroy, AfterViewInit {
  mainForm: FormGroup;
  options = { theme: 'vs-dark', language: 'css' };
  isInitial = false;
  constructor(private fb: FormBuilder) {}
  isFormDirty(): boolean {
    return this.mainForm.dirty;
  }
  submit(): void {
    alert('saved successfully');
    this.mainForm.markAsPristine();
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      monaco: [''],
    });
  }

  ngAfterViewInit(): void {
    this.mainForm.valueChanges.subscribe((res) => {
      if (!this.isInitial) {
        this.mainForm.markAsPristine();
        this.isInitial = true;
      } else {
        this.mainForm.markAsDirty();
      }
    });
  }
}
