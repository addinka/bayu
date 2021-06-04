import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  full_name: string;
  phone_number: string;
  anggota: any;
  
  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
    private storage: Storage,
    ) { }

    
    ngOnInit() {
      setTimeout(() => {
      this.router.navigate(['/']);
      }, 10); //5s
      }

}
