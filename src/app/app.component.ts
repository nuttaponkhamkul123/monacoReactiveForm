import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MonacoComponent } from './component/monaco/monaco.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  parentForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm = this.fb.group({});
  }
  ngAfterViewInit(): void {}

  title = 'monaco';
}
