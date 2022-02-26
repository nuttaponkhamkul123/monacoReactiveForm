import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import {
  EditorComponent,
  MonacoEditorModule,
  NgxMonacoEditorConfig,
} from 'ngx-monaco-editor';

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss'],
})
export class MonacoComponent implements OnInit, OnDestroy {
  mainForm: FormGroup;
  options = { theme: 'vs-dark', language: 'css' };
  constructor(private fb: FormBuilder) {}
  get monaco(): FormControl {
    return this.mainForm.get('monaco') as FormControl;
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      monaco: [''],
    });
  }
}
