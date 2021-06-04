import { Component, OnInit ,ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import{ GlobalConstants } from './common/global-constants';
import {  Title, Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
//import { title } from 'process';
import { PostProvider } from './../providers/post-provider';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  offset = 0;
  pokemon = [];	
  data: any;
  url: any;
  full_name: string;
  inisial: string;
  anggota: any;
  showmenu:boolean=true;
  public selectedIndex = 0;
  anio: number = new Date().getFullYear();


  public appPages = [
    {
      title: 'Home',
      url: '',
    },
   
  ];


  @ViewChild('content') nav: NavController;
  rootPage: any;

  constructor(
    
    private pokeService: PokemonService,
    private storage: Storage,
    private activatedRoute: ActivatedRoute,
   
    private alertCtrl: AlertController,
    private router: Router,

    public toastController: ToastController, 
    private postPvdr: PostProvider,
  ) {
    //this.initializeApp();
  }

  
  

  async proseslogout() {
    this.storage.clear();

    this.router.navigateByUrl('/login')
    .then(() => {
     window.location.reload();
     this.storage.clear();
   });
    
    const toast = await this.toastController.create({
      message: 'Logout successful',
      duration: 2000
     });
    toast.present();

  }
  showHead: boolean = false;

  ionViewWillEnter() {
    this.storage.get('session_storage').then((res) => {
      console.log(res);
      this.anggota = res;
      this.full_name = this.anggota.full_name;
     
    });
  }
  ngOnInit() {
    this.storage.get('session_storage').then((res) => {
      console.log(res);
      this.anggota = res;
      this.full_name = this.anggota.full_name;
      this.inisial = this.anggota.inisial;
      if(this.inisial == null){
        console.log('kosong');
      }else {
        console.log('');
      }
    });


    this.loadPokemon();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {
 
        var rt = this.getChild(this.activatedRoute)
 
      
      })
     
   
  }
 /* initializeApp() {
     
      this.storage.get('session_storage').then((res) => {
      if (res == null) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/customer']);
      }
    });
  }
  */
  
  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
 
  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
 
    this.pokeService.getMenu(this.offset).subscribe(res => {
      this.pokemon = [...this.pokemon, ...res];
 
      if (event) {
        event.target.complete();
      }
 
      
    });
  }

  
  
  
  footer = GlobalConstants.sitefooter;
}
