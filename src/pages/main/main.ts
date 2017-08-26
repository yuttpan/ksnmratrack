import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from "../home/home";



/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  private usernames : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage) {
                this.storage.get('username').then((vals) => {
                  this.usernames = vals ;
                  
                });
  }

  public signout():void {
    console.log('Logout')
    this.navCtrl.push(HomePage);
   // this.storage.remove('username');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
