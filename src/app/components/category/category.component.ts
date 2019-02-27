import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { GetCategories, AddCategory, PutCategory, DeleteCategory } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  Title = 'Categories';
  success = false;
  public categoryForm: FormGroup;
  getState: Observable<any>;
  categories;
  create = false;
  currentId = "";
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) { 
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
    });
    this.getState.subscribe((state) => {
      this.categories = state.categories;
      if(this.categories && state.category && state.isCreate){
          this.categories.unshift(state.category);
          this.create = false;
        }
        
      if(this.categories && this.categories.length && state.delete_category_id && state.isDelete){
          this.categories.splice(this.categories.findIndex(item => item._id === state.delete_category_id), 1);
        }
      if(this.categories && this.categories.length && state.put_category && state.isUpdate){

         let updateItem = this.categories.findIndex(item => item._id === state.put_category._id);
         this.categories[updateItem] = state.put_category;
        }  
    });
    this.store.dispatch(new GetCategories('get'));
  }
  public onSubmit() {
    const payload = {
      name: this.categoryForm.value.name,
      img: this.categoryForm.value.img,
    };
    this.store.dispatch(new AddCategory(payload));
  }

  public putCategory() {
    const payload = {
      _id: this.currentId,
      name: this.categoryForm.value.name,
      img: this.categoryForm.value.img,
    };

    this.store.dispatch(new PutCategory(payload));
    
  }

  public deleteCategory(id) {
    this.store.dispatch(new DeleteCategory(id));
  }
  public insertCategory(category) {
    this.create = true;
    this.currentId = category._id;
    this.categoryForm.patchValue({
      name: category.name,
      img: category.img,
  });
  }
}
