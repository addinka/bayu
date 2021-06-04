import { Component } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage {
  offset = 0;
  pokemon = [];	
  doc = [];
  audokumen = [];
  usadokumen = [];
  asiadokumen = [];
  midasiadokumen = [];
  dokumen = [];
  footer = GlobalConstants.sitefooter;
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta) {}

  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle("Campervan Packages & Trip Ideas | Wicked Campers");
    this.meta.updateTag({ property: 'og:url', content:'http://yoururl.com'});
    this.meta.updateTag({ property: 'og:title', content:"Campervan Hire Locations | Wicked Campers" });
    this.meta.updateTag({ property: 'og:image', content: "your image link"});
    this.meta.updateTag({ property: 'og:description', content:  "Australia sweet packages for you to enjoy on you campervan roadtrip in Australia."});
  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 0;
    }
    this.pokeService.getPokemon(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];
      if (event) {
        event.target.complete();
      }
      });
    this.pokeService.getCategoryDoc(this.offset).subscribe(res => {
      this.doc = [...this.doc, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
    this.pokeService.getdoc(this.offset).subscribe(res => {
      this.dokumen = [...this.dokumen, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
    this.pokeService.getdocau(this.offset).subscribe(res => {
      this.audokumen = [...this.audokumen, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
    this.pokeService.getdocusa(this.offset).subscribe(res => {
      this.usadokumen = [...this.usadokumen, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
    this.pokeService.getdocasia(this.offset).subscribe(res => {
      this.asiadokumen = [...this.asiadokumen, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
    this.pokeService.getdocmidasia(this.offset).subscribe(res => {
      this.midasiadokumen = [...this.midasiadokumen, ...res];
 
      if (event) {
        event.target.complete();
      }
    });



  }
  

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  
 
   
  onSearchChange(e) {
    let value = e.detail.value;
 
    if (value == '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }
 
    this.pokeService.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }

}
