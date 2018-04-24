import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad LoginPage');
  }

 showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Prueba!',
      subTitle: 'Ysidro y chiquin son maricos',
      buttons: ['OK']
    });
    alert.present();
  }

  home(){
  this.navCtrl.setRoot(HomePage);
 }
 registro(){
  this.navCtrl.push(RegistroPage);
 }
}
