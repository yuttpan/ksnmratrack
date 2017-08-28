import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPageModule } from "../pages/login/login.module";
import { SearchmraPageModule } from "../pages/searchmra/searchmra.module";
import { MainPageModule } from "../pages/main/main.module";
import { ShowmraPageModule } from "../pages/showmra/showmra.module";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SearchAnProvider } from '../providers/search-an/search-an';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    
    

  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),LoginPageModule,SearchmraPageModule,
    MainPageModule,ShowmraPageModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage

    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    SearchAnProvider,
  ]
})
export class AppModule {}
