/*
Program: ToDoApp
Author: Irin Avery 200260949
Date Last Modified: 2/16/2017
File: Home.ts
Description: Prompts CRUD functionality, and navigates to add and edit page.
Update: Added navigation to edit page with passed values.
*/
// import components
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ShoppingDetailsPage } from '../shopping-details/shopping-details';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    shoppingList: FirebaseListObservable<any>;
    constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController,

    /* Gathers the todo list from the firebase DB */
    public actionSheetCtrl: ActionSheetController) {
        this.shoppingList = af.database.list('/shoppingList');
    }
    //navigate to details page when add button is clicked
    newList() {
        this.navCtrl.push(ShoppingDetailsPage);
    }
    //navigate to details page when edit button is clicked, pass information to edit page
    editList(listID:string, name:string) {
        this.navCtrl.push(ShoppingDetailsPage,
        {id: listID,name:name});
    }
    
    //prompt delete that removes the task from the list
    promptDelete(listID: string) { 
        let alert = this.alertCtrl.create({ 
            message: "Delete To-Do?", buttons: [{ text: 'Cancel', }, 
        { text: 'Yes', handler: data => { 
            this.shoppingList.remove(listID); } }] }
        ); 
        
        alert.present(); 
    }
}