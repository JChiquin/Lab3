import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { ModalController } from 'ionic-angular';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
 constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}
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
