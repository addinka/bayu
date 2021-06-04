import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from './../services/pokemon.service';
import{ GlobalConstants } from '../common/global-constants';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Platform } from '@ionic/angular';
import {  Title, Meta } from '@angular/platform-browser';
import { ToastController} from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-detaillocations',
  templateUrl: './detaillocations.page.html',
  styleUrls: ['./detaillocations.page.scss'],
})
export class DetaillocationsPage implements OnInit {

  details: any;
  trustedUrl: any;
  hari: any;
  spec: any;
  additional: any;
  highlight: any;
  keberangkatan: any;
  direction:any;
  offset = 0;
  pokemon = [];	
  availoc:any;
  mySlider: any;

  //select adult,child
  guestBtn = <HTMLElement>document.getElementById("guests-input-btn");
  guestOptions = <HTMLElement>document.querySelector("#guests-input-options");
  adultsSubsBtn = <HTMLElement>document.querySelector("#adults-subs-btn");
  adultsAddBtn = <HTMLElement>document.querySelector("#adults-add-btn");
  childrenSubsBtn = <HTMLElement>document.querySelector("#children-subs-btn");
  childrenAddBtn = <HTMLElement>document.querySelector("#children-add-btn");
  adultsCountEl = <HTMLElement>document.querySelector("#guests-count-adults");
  childrenCountEl = <HTMLElement>document.querySelector("#guests-count-children");
  maxNumGuests = 15;
  isGuestInputOpen = false;
  adultsCount = 1;
  childrenCount = 0;
  textt="1 Adult";


  footer = GlobalConstants.sitefooter;

  @ViewChild('mySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev(); 
  }

  datax:any={};
  departdate:any=0;
  constructor(public platform: Platform, private pokeService: PokemonService,  public toastController: ToastController, private route: ActivatedRoute, public router: Router, public sanitizer: DomSanitizer, private titleService: Title, private meta: Meta, private metaService: Meta) {
    sessionStorage.removeItem('sessiondatax');
  }
 
  /*
  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getAVaillocDetails(index).subscribe(detaillocations => {
      this.detaillocations = detaillocations;
      this.trustedUrl = this.geturl();
    });
   */
  
  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getAVaillocDetails(index).subscribe(details => {
      this.details = details;
      this.trustedUrl = this.geturl();
      this.hari=details['hari'];
      this.spec=details['itin'];
      this.additional=details['additional'];
      this.highlight=details['highlight'];
      this.keberangkatan=details['departure'];
      this.direction=details['custom_data']['routeurl'];
      
     // this.availoc=details['available_locations'];
      //console.log(JSON.stringify(this.availoc));
      

    this.titleService.setTitle((this.details?.meta_title));
    this.metaService.updateTag({ name: 'description', content: this.details?.meta_description });
    this.metaService.updateTag({ name: 'keywords', content: this.details?.meta_keyword });
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.details?.meta_title });
    this.metaService.updateTag({ name: 'twitter:description', content: this.details?.meta_description });
    this.metaService.updateTag({ name: 'twitter:image:src', content: "../../assets/images/socialmedia/vehicle.jpg"});
    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: this.details?.ogurl });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: this.details?.meta_description });
    this.metaService.updateTag({ property: 'og:title', content:  this.details?.meta_title });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/vehicle.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
   
 
     
    });
    console.log(this.guestBtn);
     
    
  }
  tbadl(){
    this.adultsCount = this.addValues(this.adultsCount);
    this.updateValues();
  };
  kradl() {
    this.adultsCount = this.substractValues(this.adultsCount, 1);
    this.updateValues();
  };

  tbchl() {
    this.childrenCount = this.addValues(this.childrenCount);
    this.updateValues();
  };
  krchl() {
    this.childrenCount = this.substractValues(this.childrenCount, 0);
    this.updateValues();
  };
  opench() {
    console.log("open");
    if (this.isGuestInputOpen) {
      this.guestBtn.classList.remove("open");
      this.guestOptions.classList.remove("open");
    } else {
      this.guestBtn.classList.add("open");
      this.guestOptions.classList.add("open");
    }
    this.isGuestInputOpen = this.isGuestInputOpen ? false : true;
    //e.preventDefault();
  };
  calcTotalGuests() {
    return this.adultsCount + this.childrenCount;
  }
  
  addValues(count) {
    return (this.calcTotalGuests() < this.maxNumGuests) ? count + 1 : count;
  }
  
  substractValues(count, min) {
    return (count > min) ? count - 1 : count;
  }
  updateValues() {
    console.log(this.adultsCount);
    this.textt = `${this.adultsCount} Adults`;
    this.textt += (this.childrenCount > 0) ? `, ${this.childrenCount} Children` : '';
    //this.guestBtn.innerHTML = btnText;
    //this.adultsCountEl.innerHTML = this.adultsCount;
    //this.childrenCountEl.innerHTML = this.childrenCount;
    /*if (this.adultsCount == 1) {
      this.adultsSubsBtn.classList.add("disabled");
    } else {
      this.adultsSubsBtn.classList.remove("disabled");
    } if (this.childrenCount == 0) {
      this.childrenSubsBtn.classList.add("disabled");
    } else {
      this.childrenSubsBtn.classList.remove("disabled");
    } if (this.calcTotalGuests() == this.maxNumGuests) {
      this.adultsAddBtn.classList.add("disabled");
      this.childrenAddBtn.classList.add("disabled");
    } else {
      this.adultsAddBtn.classList.remove("disabled");
      this.childrenAddBtn.classList.remove("disabled");
    }*/
  }
  geturl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.details?.iframe);
  }

  async onClickSubmit() {
    this.datax['departdate']=this.departdate;
    if (this.departdate == '0') {
      const toast = await this.toastController.create({
      message: 'Select Date of Travel...',
      position: 'bottom',
      duration: 3000,
      color: 'warning',
      cssClass: 'toastAfterHeader'
      
      });
      toast.present();
        
    
  }else{
    this.datax['child']=this.childrenCount;
    this.datax['adult']=this.adultsCount;
   
    this.datax['harga']=this.details['harga'];
    this.datax['title']=this.details['title'];
    this.datax['thumbnail']=this.details['thumbnail'];
    sessionStorage.setItem('sessiondatax', JSON.stringify(this.datax));
    console.log(sessionStorage.getItem('sessiondatax'));
    this.router.navigate(['./order'], { relativeTo: this.route });
  }
  
}


slideOpts1= {
  //loop: true, // have to add loop = true, otherwise when reach to last slide if will all the way back to first, not just smooth slide to first
  slidesPerView: 1, 
  initialSlide: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 15,
  autoplay: true,
  speed: 900,
  pager: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }
  };
  
}
