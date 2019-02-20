import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { GetProducts, AddProduct, DeleteProduct } from '../../store/actions/auth.actions';

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
  products;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.productsForm = this.formBuilder.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      descr: ['', Validators.required],
      prize: ['', Validators.required],
    });
    this.getState.subscribe((state) => {
      this.products = state.products;
      if(this.products && this.products.length && state.product){
          this.products.unshift(state.product);
        }
    });
    this.store.dispatch(new GetProducts('get'));
  }

  public onSubmit() {
    const payload = {
      name: this.productsForm.value.name,
      img: this.productsForm.value.img,
      descr: this.productsForm.value.descr,
      prize: this.productsForm.value.prize
    };
    console.log(34, payload);
    this.store.dispatch(new AddProduct(payload));
  }
  public deleteProduct(id) {
    this.store.dispatch(new DeleteProduct(id));
      console.log(57, id)
  }
}
