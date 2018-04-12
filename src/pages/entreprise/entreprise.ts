import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntreprisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-entreprise',
    templateUrl: 'entreprise.html',
})
export class EntreprisePage {
    id: number;
    name: string;
    adresse: string;
    ville: string;
    cp: string;
    description: string;
    author: string;
    date: Date;



    constructor(public navCtrl: NavController, public navParams: NavParams, id?: number, name?: string, ville?: string, cp?: string, adresse?: string,
                description?: string, author: string = 'alban') {
        this.id = id;
        this.name = name;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
        this.description = description;
        this.author = author;
        this.date = new Date();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EntreprisePage');
    }

}

