import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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
}
