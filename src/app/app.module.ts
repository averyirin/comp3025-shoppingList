import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//our details page
import { ShoppingDetailsPage } from '../pages/shopping-details/shopping-details';
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyCnML7O2OVlOmhGCMBmLeRYGUwLcWFg7t8",
    authDomain: "comp3025-shoppinglist.firebaseapp.com",
    databaseURL: "https://comp3025-shoppinglist.firebaseio.com",
    storageBucket: "comp3025-shoppinglist.appspot.com",
    messagingSenderId: "989456491585"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShoppingDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShoppingDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
