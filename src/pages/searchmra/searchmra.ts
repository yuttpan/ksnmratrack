import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from "../home/home";


import { SearchAnProvider } from "../../providers/search-an/search-an";
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
  //myForm:FormGroup;
  //anSerrch:FormControl;
  
  errorMessage:string;
private usernames : string;
public users : Array<{name:string,email:string}>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
   // public fb:FormBuilder,
    public storage: Storage,
  private searchAN : SearchAnProvider) {

      this.storage.get('username').then((vals) => {
        this.usernames = vals ;
        
      });
     /* this.myForm = this.fb.group({
        'anSerrch': this.anSerrch
      });*/

    }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchmraPage');
  }
  ionViewWillEnter(){
   this.searchAN.getAn()
   .then((data:any)=>{
     
     this.users = data ;
     console.log(this.users);
   },(error)=>{})
  } ;
  
}
