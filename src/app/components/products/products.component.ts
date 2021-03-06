import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { GetProducts, AddProduct, DeleteProduct, PutProduct } from '../../store/actions/auth.actions';

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
  create = false;
  currentId = "";

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
      if(this.products && state.product && state.isCreate){
          this.products.unshift(state.product);
          this.create = false;
        }
        
      if(this.products && this.products.length && state.delete_product_id && state.isDelete){
          this.products.splice(this.products.findIndex(item => item._id === state.delete_product_id), 1);
        }
      if(this.products && this.products.length && state.put_product && state.isUpdate){

         let updateItem = this.products.findIndex(item => item._id === state.put_product._id);
         this.products[updateItem] = state.put_product;
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
    this.store.dispatch(new AddProduct(payload));
  }

  public putProduct() {
    const payload = {
      _id: this.currentId,
      name: this.productsForm.value.name,
      img: this.productsForm.value.img,
      descr: this.productsForm.value.descr,
      prize: this.productsForm.value.prize
    };

    this.store.dispatch(new PutProduct(payload));
    
  }

  public deleteProduct(id) {
    this.store.dispatch(new DeleteProduct(id));
  }
  public insertProduct(product) {
    this.create = true;
    this.currentId = product._id;
    this.productsForm.patchValue({
      name: product.name,
      img: product.img,
      descr: product.descr,
      prize: product.prize
  });
  }
}





