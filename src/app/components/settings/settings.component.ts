import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
 
import { UserService } from '../../_services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  title = 'My Account';
  success = false;
  constructor(
  ) { }

  ngOnInit() { }


  public onSuccess() {
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 2000);
  }
}
