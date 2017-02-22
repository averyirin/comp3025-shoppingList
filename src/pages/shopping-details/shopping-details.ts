/*
Program: ShoppingListApp
Author: Irin Avery 200260949
Date Last Modified: 2/16/2017
File: shopping-details.ts
Description: A form that edits or creates new lists
Update: Added input validation
*/
//import components
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {item} from './item';

@Component({
  selector: 'page-shopping-details',
  templateUrl: 'shopping-details.html'
})

export class ShoppingDetailsPage {
  //our list of tasks from the firebase DB
  itemList: FirebaseListObservable<any>;
  //informtation for editing
  id:string;
  name:string;
  item1:item;
  item2:item;
  item3:item;
  item4:item;
  item5:item;
  private detailsForm : FormGroup;
  submitAttempt:boolean;


  //gathers todolist from the database, and the passed values of task information for editing
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public af: AngularFire, public navParams: NavParams) {
    //input validation
    this.detailsForm = formBuilder.group({
    listName: ['', Validators.compose([Validators.minLength(1), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    itemName: ['', Validators.compose([Validators.minLength(1), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
   
    this.itemList = af.database.list('/items');
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name'); 
  }
  //update to saveToDo
  saveList(){
    this.submitAttempt = true;
    if(this.detailsForm.valid){
        
    if(this.id==""){
      this.createList(this.name, this.item1, this.item2, this.item3, this.item4, this.item5);
    }else{
      this.updateList(this.id, this.name, this.item1, this.item2, this.item3, this.item4, this.item5);
    }
  }else{
    console.log("Invalid");
  }
  }
  //Updates the task and then navigates back to the task list view
  updateList(id, name, item1, item2, item3, item4, item5){
          this.itemList.update(id, {
            name:name,
            item1:item1,
            item2:item2,
            item3:item3,
            item4:item4,
            item5:item5
          })
      this.navCtrl.pop();
  }
  //creates our task by pushing the new task into the firebase DB
  //navigates back to list view upon completion
  createList(name, item1,item2, item3, item4, item5) {
    this.itemList.push({
      name: name,
            item1:item1,
            item2:item2,
            item3:item3,
            item4:item4,
            item5:item5
    }).then( newList => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}