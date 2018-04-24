import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FiltrosPage } from '../filtros/filtros';

/**
 * Generated class for the CatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  publicaciones: Array<{
    title: string,
    images: Array<string>,
    precio: number,
    descripcion: string,
    vendedor: string,
    categoria: string,
    avatar: string,
    fecha: string,
    likes: number,
    comentarios: number
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public modalCtrl: ModalController ) {
    this.loadingCtrl.create({
      content: 'Por favor espere...',
      duration: 1000,
    }).present();
    this.publicaciones = [];
    this.publicaciones.push({title: "Iphone X 256gb Lte 4g Nuevos Garantía Originales",
      images: ['assets/imgs/telefono1a.png','assets/imgs/telefono1b.png','assets/imgs/telefono1c.png'],
      precio: Math.floor(Math.random()*10000000+ 100000),
      descripcion: `iPhone X 256Gb LTE 4G 
Nuevos Originales en caja 
Equipos de última tecnología apple 
Libres para cualquier operador 
Trabajamos con los bancos: ...`,
      vendedor: "Jorge Chiquín",
      categoria: "phone-portrait",
      avatar: "assets/imgs/jorge.png",
      fecha: "23/04/2018",
      likes: Math.floor(Math.random()*30),
      comentarios: Math.floor(Math.random()*30)
    });


    this.publicaciones.push({title: "Portatil Thinkpad X1 Carbon I7-7600u 16gb Ram 256gb Ssd 14'",
      images: ['assets/imgs/portatil1a.png','assets/imgs/portatil1b.png','assets/imgs/portatil1c.png'],
      precio: Math.floor(Math.random()*10000000+ 100000),
      descripcion: `características del equipo publicado:

Procesador: Intel® Core™ vPro™ i7-7600U (2,80 GHz, 4 MB SmartCache, hasta 3,90 GHz Turbo)

RAM: 16GB RAM DDR3 1866 Soldered características del equipo publicado:

Procesador: Intel® Core™ vPro™ i7-7600U (2,80 GHz, 4 MB SmartCache, hasta 3,90 GHz Turbo)

RAM: 16GB RAM DDR3 1866 Soldered  ...`,
      vendedor: "Ysidro Fernandez",
      categoria: "laptop",
      avatar: "assets/imgs/ysidro.png",
      fecha: "20/04/2018",
      likes: Math.floor(Math.random()*30),
      comentarios: Math.floor(Math.random()*30)
    });
    this.publicaciones.push({title: "Router De Alta Potencia Rompemuro 450mbps Tp Link Tl-wr941hp",
      images: ['assets/imgs/router1a.png','assets/imgs/router1b.png'],
      precio: Math.floor(Math.random()*10000000+ 100000),
      descripcion: "Sin descripción" ,
      vendedor: "Ysidro Fernandez",
      categoria: "wifi",
      avatar: "assets/imgs/ysidro.png",
      fecha: "20/04/2018",
      likes: Math.floor(Math.random()*30),
      comentarios: Math.floor(Math.random()*30)
    });
    this.publicaciones.push({title: "Iphone X 256gb Lte 4g Nuevos Garantía Originales",
      images: ['assets/imgs/telefono1a.png','assets/imgs/telefono1b.png','assets/imgs/telefono1c.png'],
      precio: Math.floor(Math.random()*10000000+ 100000),
      descripcion: `iPhone X 256Gb LTE 4G 
Nuevos Originales en caja 
Equipos de última tecnología apple 
Libres para cualquier operador 
Trabajamos con los bancos: ...`,
      vendedor: "Jorge Chiquín",
      categoria: "phone-portrait",
      avatar: "assets/imgs/jorge.png",
      fecha: "23/04/2018",
      likes: Math.floor(Math.random()*30),
      comentarios: Math.floor(Math.random()*30)
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }

  filtrosModal() {
    let modal = this.modalCtrl.create(FiltrosPage);
    modal.present();
  }
  

}
