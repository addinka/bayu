import { Component, ViewChild} from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';
import { PokemonService } from '../services/pokemon.service';
import { IonSlides } from '@ionic/angular';
import{ Footermobile } from '../common/footermobile';
import {  Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router , NavigationExtras } from '@angular/router';
import * as moment from 'moment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { concatAll } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { title } from 'process';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-depan',
  templateUrl: './depan.page.html',
  styleUrls: ['./depan.page.scss'],
})
export class DepanPage {
  offset = 0;
  hotel =[];
  location =[];
  pokemon = [];	
  special = [];
  komen =[];
  data: any;
  url: any;
  mySlider: any;
  mySliderkomen: any;
  safeSrc: SafeResourceUrl;
  username: string;
  anggota: any;
  
  footer = GlobalConstants.sitefooter;
  footermobile = Footermobile.sitefootermobile;
  
  booklocation:any;
  Age:any;
  bookdata: any;
  bookurl: any;
  
  
  step1={
    country:'au',
    pickuploc:'',
    pickupdate:'',
    pickuptime:'',
    pickuptimem:'',
    dropoffloc:'',
    dropoffdate:'',
    dropofftime:'',
    dropofftimem:'',
    voucher:'',
    age:''
  };
  step1m={
    country:'au',
    pickuploc:'',
    pickupdate:'',
    pickuptime:'',
    dropoffloc:'',
    dropoffdate:'',
    dropofftime:'',
    voucher:'',
    age:''
  };
  agexx=0;
  alldata=1;
  dateverify=1;

  PickupOptions: any = {
    Header:'Select Pickup Location',
    cssClass: 'action-sheet-height'
  };
  DropoffOptions: any = {
    Header:'Select Dropoff Location',
    cssClass: 'action-sheet-height'
  };

  AgeOptions: any = {
    Header:'Select Driver Age',
    cssClass: 'action-sheet-height'
  };
  datedesktop=[];
  public minDate = moment().add(0, 'd').format();
  public maxDate = moment().add(5, 'y').format();

  dayx = new Date();

  public mindateDS= moment(this.dayx.setHours(10,0,0)).format();
  public maxdateDS= moment(this.dayx.setHours(16,30,0)).format();
  @ViewChild('mySliderkomen')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev(); 
  }
  /*
  showhide(){
   
    var x = document.getElementById("show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  */
  defloc:boolean=false;
  deflocval="";
  compareWith : any ;
  constructor(private pokeService: PokemonService, private storage: Storage, private titleService: Title, private meta: Meta, private route: ActivatedRoute, public router: Router, private metaService: Meta, private sanitizer: DomSanitizer, public toastController: ToastController, private postPvdr: PostProvider) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://snapwidget.com/embed/443372");
    sessionStorage.removeItem('step3session');
    sessionStorage.removeItem('bookingrefdata');
    this.route.queryParams.subscribe(params => {
      if(params['refid']!=null){
        
        sessionStorage.setItem('refid',params['refid']);
        console.log("refid:"+sessionStorage.getItem('refid'));
      }
      var idx=this.route.snapshot.paramMap.get('index');
      if(idx!=null){
        this.defloc=true;
        this.deflocval=idx;
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
  
  ionViewWillEnter() {
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.username = this.anggota.username;
    });
  }

  ngOnInit()  {
    console.log(this.mindateDS);
    this.loadPokemon();
    this.titleService.setTitle('Bayu Buana Travel Services - bayubuanatravel.com');
    this.metaService.updateTag({ name: 'description', content: 'Find cheap Campervan hire at over 46 locations in 10 countries ✅ Rent a campervan deals ✅ Book in 60 seconds ✅ Trusted by 1+ million customers.' });
    this.metaService.updateTag( { rel: 'canonical', href: 'https://www.wickedcampers.com/' } );

    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:site', content: '@wickedcampers' });
    this.metaService.updateTag({ name: 'twitter:site:id', content: '@wickedcampers' });
    this.metaService.updateTag({ name: 'twitter:creator', content: '@wickedcampers' });
    this.metaService.updateTag({ name: 'twitter:url', content: 'https://www.wickedcampers.com.au' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Campervan Hire Australia - Wicked Campers' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'We offer Wicked campervan hire for traveller looking for a cheap and easy way of exploring Australia.' });
    this.metaService.updateTag({ name: 'twitter:image:src', content: 'https://www.wickedcampers.com.au/assets/images/socialmedia/ogimg.jpg' });
    // Facebook
    this.metaService.updateTag({ property: 'fb:app_id', content: '885351928512415' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.wickedcampers.com.au' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'We offer Wicked campervan hire for traveller looking for a cheap and easy way of exploring Australia.' });
    this.metaService.updateTag({ property: 'og:title', content: 'Campervan Hire Australia - Wicked Campers' });
    this.metaService.updateTag({ property: 'og:image', content: '../../assets/images/socialmedia/flashsale-r.jpg' });
    //app
    this.metaService.updateTag({ property: 'al:ios:app_name', content: 'Wicked Campers' });
    this.metaService.updateTag({ property: 'al:android:package', content: 'com.wickedcampers.android' });
  
    this.compareWith = this.compareWithFn;
    /*(<any>window).dataLayer.push({
      event: 'virtualPageview'
    });*/
    
    //set default date
    this.step1.pickupdate=moment().add(1, 'd').format();
    this.step1.dropoffdate=moment().add(8, 'd').format();

    this.step1m.pickupdate=moment().add(1, 'd').format();
    this.step1m.dropoffdate=moment().add(8, 'd').format();

    //set default time
    this.step1.pickuptime=this.mindateDS;
    this.step1.dropofftime=this.mindateDS;

    this.step1m.pickuptime=this.mindateDS;
    this.step1m.dropofftime=this.mindateDS;
    
   

  }
 
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.pokeService.getPokemon(this.offset).subscribe(res => {
      this.hotel = [...this.hotel, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
 
    this.pokeService.getPromo(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];
 
      if (event) {
        event.target.complete();
      }
    });

    this.pokeService.getLocations(this.offset).subscribe(res => {
      this.location = [...this.location, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
    this.pokeService.getSpecials(this.offset).subscribe(res => {
      this.special = [...this.special, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
    
    
    
    this.pokeService.getKomen(this.offset).subscribe(res => {
      this.komen = [...this.komen, ...res];
 
      if (event) {
        event.target.complete();
      }
    });
    
    


  }
  
   

  
	slideOpts= {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /*
  autoplay: {
    delay: 4000,
      disableOnInteraction: false,
  },
  */
 autoplay:false,
  paginationClickable: true,
  observer: true, 
  
  observeParents: true,
  breakpoints: {
    360: {
      slidesPerView: "auto",
      spaceBetween: 0,
      //scrollbar: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      freeMode: true,
    },
    640: {
      slidesPerView: "auto",
      spaceBetween: 0,
      freeMode: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
      paginationClickable: true,
      watchSlidesProgress: true,
      pager: true,
      //freeMode: true
    },
  }
  };
  slideOptskom= {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay:false,
    speed: 900,
   
    paginationClickable: true,
    observer: true, 
    observeParents: true,
    breakpoints: {
      360: {
        slidesPerView: 2,
        spaceBetween: 0,
        //scrollbar: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 15,
        paginationClickable: true,
        watchSlidesProgress: true,
        pager: true,
        freeMode: true,
       
      },
    }
    };
    slideOptsloc= {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      speed: 900,
      paginationClickable: true,
      observer: true, 
      observeParents: true,
      breakpoints: {
        360: {
          slidesPerView: 2,
          spaceBetween: 0,
          //scrollbar: true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
          paginationClickable: true,
          watchSlidesProgress: true,
          pager: true,
        
          freeMode: true
        },
      }
      };
    slideOpts1= {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      speed: 900,
      paginationClickable: true,
      observer: true, 
      observeParents: true,
      autoplay: true,
      loop: true,
      breakpoints: {
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
          //scrollbar: true,
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
       
      }
      };


	slidesDidLoad(slides:IonSlides) {
  //slides.startAutoplay();
  
  }

  //bookings
  setdropdate(){
    var test=moment(this.step1m.pickupdate).add(7,'d').format();
    this.step1m.dropoffdate=test;
  }
  swaploc(){
    var pick=this.step1.pickuploc;
    var retr=this.step1.dropoffloc;
    this.step1.pickuploc=retr;
    this.step1.dropoffloc=pick;
  }

  gotostep2(form){
    
      this.step1.pickupdate=moment(this.step1.pickupdate).format();
      //this.step1.pickuptime=moment(this.step1.pickuptime).format("HH_mm");
      this.step1.dropoffdate=moment(this.step1.dropoffdate).format();
      //this.step1.dropofftime=moment(this.step1.dropofftime).format("HH_mm");
      console.log(this.step1);
      if(this.step1.dropoffdate>this.step1.pickupdate){
        let navigationExtras: NavigationExtras = {
          state: {
            data: this.step1
          }
        };
        this.router.navigate(['bookings-select-vehicles'], navigationExtras);
      }
  }
  gotostep2m(form){
    
      //this.step1m.pickupdate=moment(this.step1m.pickupdate).format("DD/MM/YYYY");
      //this.step1m.pickuptime=moment(this.step1m.pickuptime).format("HH:mm");
      //this.step1m.dropoffdate=moment(this.step1m.dropoffdate).format("DD/MM/YYYY");
      //this.step1m.dropofftime=moment(this.step1m.dropofftime).format("HH:mm");
      console.log(this.step1m);
      if(this.step1m.dropoffdate>this.step1m.pickupdate){
        let navigationExtras: NavigationExtras = {
          state: {
            data: this.step1m
          }
        };
        this.router.navigate(['bookings-select-vehicles'], navigationExtras);
      }
  }
  @ViewChild('picker') picker;
  open() {
    this.picker.open();
  }
  
  titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
  }
  
  compareWithFn(o1, o2) {
    return o1 === o2;
  };

  

}
