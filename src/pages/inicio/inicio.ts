import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  login(){
  this.navCtrl.push(LoginPage);
 }

 registro(){
  this.navCtrl.push(RegistroPage);
 }

loginModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}

