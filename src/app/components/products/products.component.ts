import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { AddProduct } from '../../store/actions/auth.actions';

import { UserService } from '../../_services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Title = 'Products';
  success = false;
  public productsForm: FormGroup;
  getState: Observable<any>;    
    
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    ) { }

ngOnInit() {
    this.productsForm = this.formBuilder.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      descr: ['', Validators.required],
      prize: ['', Validators.required],
    });
    this.getState.subscribe((state) => {
      console.log(228, state);
    });
}
    
public onSubmit(){
    const payload = {
        name: this.productsForm.value.name,
        img: this.productsForm.value.img,
        descr: this.productsForm.value.descr,
        prize: this.productsForm.value.prize
    };
    console.log(34, payload );
    this.store.dispatch(new AddProduct(payload));
 }
    
}