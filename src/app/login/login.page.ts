import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import{ GlobalConstants } from '../common/global-constants';
import { ModalPopupPage } from '../modal-popup/modal-popup.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../register/register.page.scss'], 
})
export class LoginPage implements OnInit {

 email: string = '';
 password: string = '';
 footer = GlobalConstants.sitefooter;

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
    private storage: Storage,
    public modalController: ModalController,
    ) { this.initializeApp(); }

    initializeApp() {
     
      this.storage.get('session_storage').then((res) => {
      if (res == null) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/']);
      }
    });
  } 
  ngOnInit() {

  }

  formRegister() {
    this.router.navigate(['/register']);
  }

  async proseslogin() {
    if (this.email != '' && this.password != '') {
      let body = {
        email: this.email,
        password: this.password,
        aksi: 'login'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.storage.set('session_storage', data.result);
         //this.router.navigate(['/']);
         this.router.navigateByUrl('/home')
         .then(() => {
          window.location.reload();
        });
      
         const toast = await this.toastController.create({
          message: 'Welcome',
          duration: 2000
         });
         toast.present();
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
         toast.present();
       }
     });

    } else {
      const toast = await this.toastController.create({
        message: 'Username or password invalid',
        duration: 2000
      });
      toast.present();
    }

    this.email = '';
    this.password = '';

    }

    async showModal() {
      const modal = await this.modalController.create({
        component: ModalPopupPage,
        componentProps: {
          'name': 'Hello User'
        }
      });
      return await modal.present();
    }
    
  }
