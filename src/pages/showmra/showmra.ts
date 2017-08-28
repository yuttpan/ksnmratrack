import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchAnProvider } from "../../providers/search-an/search-an";

/**
 * Generated class for the ShowmraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showmra',
  templateUrl: 'showmra.html',
})
export class ShowmraPage {
public an:string ;
public mraData: Array<{ an: string, hn: string, ptname: string,user_s:string
  ,user_r:string,send_date:string,recivedate:Date }> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private searchAN: SearchAnProvider) {
    this.an = this.navParams.get('an')
    
  }

  ionViewWillEnter(){
   
    this.searchAN.getMra(this.an)
    .then((data: any) => {
     
      this.mraData = data;
      console.log(this.mraData)
    }, (error) => { });
    

    
  }

}
