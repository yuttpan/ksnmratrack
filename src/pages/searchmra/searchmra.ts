import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from "../home/home";


import { Item } from "../../model/anSearch";
/**
 * Generated class for the SearchmraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchmra',
  templateUrl: 'searchmra.html', 
})
export class SearchmraPage {
  myForm:FormGroup;
  anSerrch:FormControl;
  item:Item;
  errorMessage:string;
private usernames : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fb:FormBuilder,
    public storage: Storage) {

      this.storage.get('username').then((vals) => {
        this.usernames = vals ;
        
      });
      this.myForm = this.fb.group({
        'anSerrch': this.anSerrch
      });

    }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchmraPage');
  }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave ");
    
  }
  
}
