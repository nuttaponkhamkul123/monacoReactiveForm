import {
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor';

@Component({
  selector: 'app-reactive-monaco',
  templateUrl: './reactive-monaco.component.html',
  styleUrls: ['./reactive-monaco.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReactiveMonacoComponent),
      multi: true,
    },
  ],
})
export class ReactiveMonacoComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @Input() options: any;
  @Input() form: FormControl;
  isInitial = false;
  @ViewChild('monaco') monaco: EditorComponent;
  private _justSetValue: any;
  private _onChange: any;

  constructor() {}

  ngOnInit(): void {}
  registerOnChange(fn: any): void {
    this._onChange = fn;
    this.monaco.registerOnChange((val: any) => {
      if (this._justSetValue === val) {
        this._justSetValue = undefined;
        return;
      }
      fn(val);
    });
  }

  registerOnTouched(fn: any): void {
    this.monaco.registerOnTouched(fn);
  }

  writeValue(val: any): void {
    if (this._onChange) {
      this._onChange(val);
      this._justSetValue = val;
    }
    this.monaco.writeValue(val);
  }

  ngAfterViewInit(): void {
    this.form.markAsPristine();
    this.monaco.registerOnChange((res: any) => {
      if (!this.isInitial) {
        this.form.markAsPristine();
        this.isInitial = true;
      } else {
        this.form.markAsDirty();
      }
    });
  }
}
