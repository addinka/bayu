import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { async } from 'q';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

 full_name: string = '';
 phone_number: string = '';
 email: string = '';
 password: string = '';
 confirm_password: string = '';

  constructor(
    private router: Router,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private postPvdr: PostProvider,
    private storage: Storage,
    ) {
      this.initializeApp();
     }
     initializeApp() {
     
      this.storage.get('session_storage').then((res) => {
      if (res == null) {
        this.router.navigate(['/register']);
      } else {
        this.router.navigate(['/home']);
      }
    });
  } 
  ngOnInit() {

  }

  formLogin() {
    this.router.navigate(['/login']);
  }

  async addRegister() {
    if (this.full_name == '') {
      const toast = await this.toastController.create({
      message: 'Fullname is required',
      duration: 2000
      });
      toast.present();
    } else if (this.phone_number == '') {
      const toast = await this.toastController.create({
        message: 'Phone number is required',
        duration: 2000
        });
      toast.present();
    } else if (this.email == '') {
      const toast = await this.toastController.create({
        message: 'email is required',
        duration: 2000
        });
      toast.present();

    } else if (this.password == '') {
      const toast = await this.toastController.create({
        message: 'Password is required',
        duration: 2000
        });
      toast.present();

    } else if (this.password != this.confirm_password) {
      const toast = await this.toastController.create({
        message: 'Password does not match',
        duration: 2000
        });
      toast.present();
    } else {
      const toast = await this.loadingCtrl.create({
        message: 'Please Wait.....',
        duration: 2000
        });
        toast.present();

      let body = {
        full_name: this.full_name,
        phone_number: this.phone_number,
        email: this.email,
        password: this.password,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.router.navigate(['/login']);
         const toast = await this.toastController.create({
          message: 'Register successfully',
          duration: 2000
         });
         toast.present();
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
       }
     });

    }
  }

}
