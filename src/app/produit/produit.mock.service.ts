import {Injectable} from '@angular/core';
import { Produit} from '../shared/produit.model';

export class ProduitMockService {

    private PRODUITS: Produit[] = [];

    constructor (){
       let p1: Produit = new Produit(1,'livre',50,2000);
        let p2: Produit = new Produit(2,'banane',15,1000);
        let p3: Produit = new Produit(3,'pomme',4,1400);
         this.PRODUITS.push(p1);
         this.PRODUITS.push(p2);
         this.PRODUITS.push(p3);
    }

    public getProduits(): Produit[] {
        return this.PRODUITS;
    }
}