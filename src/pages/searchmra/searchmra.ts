import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from "../home/home";
import { ShowmraPage } from "../showmra/showmra";


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

  errorMessage: string;
  private usernames: string;
  public anText: string;
  public users: Array<{ name: string, email: string }> = [];
  public anData: Array<{ an: string, hn: string, ptname: string, tdchdate: string }> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    // public fb:FormBuilder,
    public storage: Storage,
    private searchAN: SearchAnProvider) {

    this.storage.get('username').then((vals) => {
      this.usernames = vals;

    });
  }
  doSeachAN() {
    console.log(this.anText);
    this.searchAN.getAn(this.anText)
      .then((data: any) => {

        this.anData = data;

      }, (error) => { });

  }

  goShowMra(item):void {
    console.log(item);
    this.navCtrl.push(ShowmraPage, {
      an : item
      
    });
  }

}
