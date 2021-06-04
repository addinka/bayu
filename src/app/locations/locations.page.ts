import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import {  Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class LocationsPage {
  offset = 0;
  pokemon = [];	
  pokemonfilter=new Array();
  category=new Array();
  country=new Array();
  duration=new Array();
  lama = [];
  footer = GlobalConstants.sitefooter;
  hargamax=0;
  hargamin=0;
  rangeValues = {
    upper:2000,
    lower:0
  }
  datax:any={
    email:''
  };
  packcount=0;
  catfilter:any=[];
  countryfilter:any=[];
  durfilter:any=[];
  constructor(private pokeService: PokemonService, private titleService: Title, private meta: Meta, private metaService: Meta, private route: ActivatedRoute, public router: Router ) {}


  ngOnInit()  {
    this.loadPokemon();
    this.titleService.setTitle('Australia Depot Locations - Wicked Campers Australia');
    this.metaService.updateTag({ name: 'description', content: 'Wicked Campers have 18 Rental Locations across Australia and New Zealand...and 46 Hire Locations around the World!' });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au/locations' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Australia Depot Locations - Wicked Campers Australia' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Wicked Campers have 18 Rental Locations across Australia and New Zealand...and 46 Hire Locations around the World!' });
    this.metaService.updateTag({ name: 'ttwitter:image:src', content: '../../socialmedia/depot.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au/locations' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'Wicked Campers have 18 Rental Locations across Australia and New Zealand...and 46 Hire Locations around the World!' });
    this.metaService.updateTag({ property: 'og:title', content: 'Australia Depot Locations - Wicked Campers Australia' });
    this.metaService.updateTag({ property: 'og:image', content: '../../socialmedia/depot.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
   

  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 0;
    }

    this.pokeService.getLocations(this.offset).subscribe(res => {
      console.log(res);
      this.pokemon = res;
      this.pokemonfilter=res;
      
      for(let v of this.pokemon){
        if(this.hargamax==0 && this.hargamin==0){
          this.hargamin=parseInt(v['harga']);
          this.hargamax=parseInt(v['harga']);
        }else{
          if(parseInt(v['harga'])>this.hargamax) this.hargamax=parseInt(v['harga']);
          if(parseInt(v['harga'])<this.hargamin) this.hargamin=parseInt(v['harga']);
        }
        
        this.category.push(v['category']);
        this.country.push(v['country']);
        this.duration.push(v['durasitour']);
      }
      this.category=this.category.filter(this.onlyUnique);
      this.duration=this.duration.filter(this.onlyUnique);
      this.country=this.country.filter(this.onlyUnique);
      console.log(this.country);
      this.rangeValues.lower=this.hargamin;
      this.rangeValues.upper=this.hargamax;
      this.packcount=this.pokemon.length;

      if (event) {
        event.target.complete();
      }
 
      
    });
   
    
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
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

  onClickSubmit() {
    console.log("Entered Email : " + this.datax['email']);
    let navigationExtras: NavigationExtras = {
      state: {
        data: this.datax
      }
    };

  //  this.router.navigate(["/user"]);
    
  this.router.navigate(['./order'], { relativeTo: this.route });
    //this.router.navigate([this.details?.slug]);
  }


  //sort
  changesort(opsi){
    let opsixx=opsi.split(",");
    //console.log(opsixx[0]);
    this.pokemon.sort(this.dynamicSort(opsixx[0],opsixx[1]));
    this.pokemonfilter.sort(this.dynamicSort(opsixx[0],opsixx[1]));
    //console.log(this.rangeValues);
  }
  dynamicSort(property,type="asc") {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    if(type=="asc"){
      return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }else{
      return function (a,b) {
        var result = (b[property] < a[property]) ? -1 : (b[property] > a[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }
  }
  //filter
  filterprice(){
    //console.log(this.rangeValues);
    this.ApplyFilters()
  }
  filtercat(id){
    console.log(id)
    if (this.catfilter.some(a => a === id)) {
      this.catfilter = this.catfilter.filter(a => a !== id)
    } else {
      this.catfilter.push(id)
    }
    //console.log(this.catfilter);
    this.ApplyFilters();
  }
  filtercountry(id){
    console.log(id)
    if (this.countryfilter.some(a => a === id)) {
      this.countryfilter = this.countryfilter.filter(a => a !== id)
    } else {
      this.countryfilter.push(id)
    }
    this.ApplyFilters();
  }
  filterdur(id){
    console.log(id)
    if (this.durfilter.some(a => a === id)) {
      this.durfilter = this.durfilter.filter(a => a !== id)
    } else {
      this.durfilter.push(id)
    }
    this.ApplyFilters();
  }
  ApplyFilters() {
    this.pokemon = this.pokemonfilter.filter(item => {
      return (item.harga>= this.rangeValues['lower'] && item.harga<= this.rangeValues['upper'])&& (this.catfilter.some(b => b === item.category) || this.catfilter.length === 0)&& (this.countryfilter.some(b => b === item['country']) || this.countryfilter.length === 0)&& (this.durfilter.some(b => b === item['durasitour']) || this.durfilter.length === 0)
    });
    this.packcount=this.pokemon.length;
    //console.log(this.vehicle);
  }

}
