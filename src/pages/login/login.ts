import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { FeedBack } from "../../model/feedback";
import { MainPage } from "../main/main";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage { 
  myForm:FormGroup;
  username:FormControl;
  password:FormControl;
  feedback:FeedBack;
  errorMessage:string;

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public fb:FormBuilder,
             public storage: Storage,
             private authservice:AuthServiceProvider,
             private alerCtrl:AlertController,
             private loadingCtrl:LoadingController) {
              this.username = this.fb.control('',Validators.required);
              //this.password = this.fb.control('',Validators.required);
              this.password = this.fb.control('',Validators.compose([Validators.required,Validators.minLength(3)])); 
         
              this.myForm = this.fb.group({
                'username': this.username,
                'password': this.password
              }); 

  }

  public signin():void {
    console.log(this.myForm.value);
    let username = this.myForm.controls['username'].value;
    
    let password = this.myForm.controls['password'].value;
  
    let loader = this.loadingCtrl.create({
       content: 'กำลังตรวจสอบข้อมูล...' 
    });
    loader.present();
  
    this.authservice.signin(username,password).subscribe(
      res => {
         this.feedback = res;
         if (this.feedback.status == 'ok') {
            console.log(this.feedback);
            let alert = this.alerCtrl.create({
              title: this.feedback.message+this.feedback.name,
              buttons: ['ตกลง']
            });
            alert.present();
            this.storage.set('userstatus', this.feedback.status);
            this.storage.set('username', this.feedback.name);
            this.storage.get('userstatus').then((val) => {
              console.log( val );
              
            });
            this.storage.get('username').then((vals) => {
              console.log( vals );
              
            });
             this.navCtrl.push('MainPage');
         } else { //status == 'error'
           // console.log(this.feedback.message);
            let alert = this.alerCtrl.create({
              title: this.feedback.message,
              buttons: ['ตกลง']
            });
            alert.present();
            this.myForm.reset();
            
         }
      }, error => {
         this.errorMessage = <any> error,
         loader.dismiss();
      }, () => {
         loader.dismiss(); 
      }
    );
  
  }
  

}
