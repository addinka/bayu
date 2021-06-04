import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import{ GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})

export class BookingPage implements OnInit {
  footer = GlobalConstants.sitefooter;

  
  postdata:any;
  anggota: any;
  booking: any;

  title: string = '';
  departdate: string = '';
  adult: string = '';
  child: string = '';
  harga: string = '';

  full_name: string = '';
  phone_number: string = '';
  email: string = '';
  nationality: string = '';
  inisial: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private location: Location,  
    private storage: Storage,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    ) {
    if(sessionStorage.getItem('sessiondatax')){
      this.postdata=JSON.parse(sessionStorage.getItem('sessiondatax'));
      console.log(this.postdata);

      this.title        = this.postdata.title;
      this.departdate   = this.postdata.departdate;
      this.adult        = this.postdata.adult;
      this.child        = this.postdata.child;
      this.harga        = this.postdata.harga;
    }
  }

  ngOnInit() {

    this.storage.get('session_storage').then((res) => {
      console.log(res);
      this.anggota = res;
     // this.title          = this.anggota.title;
      this.full_name      = this.anggota.full_name;
      this.email          = this.anggota.email;
      this.phone_number   = this.anggota.phone_number;
      this.nationality    = this.anggota.nationality;
      this.inisial        = this.anggota.inisial;
      if(this.inisial == null){
        console.log('kosong');
      }else {
        console.log('');
      }
    });
  }

  async kirim() {
    if (this.full_name == '') {
      const toast = await this.toastController.create({
      message: 'Fullname is required',
      position:'top',
      color:'warning',
      duration: 2000
      });
      toast.present();
    } else if (this.email == '') {
      const toast = await this.toastController.create({
        message: 'Email is required',
        position:'top',
        color:'warning',
        duration: 2000
        });
      toast.present();
    }else if (this.phone_number == '') {
      const toast = await this.toastController.create({
        message: 'Phone Number is required',
        position:'top',
        color:'warning',
        duration: 2000
        });
      toast.present();
    }else {
      const toast = await this.loadingCtrl.create({
        message: 'Please Wait.....',
        duration: 2000
        });
        toast.present();

        let body = {
          full_name: this.full_name,
          phone_number: this.phone_number,
          email: this.email,
          nationality: this.nationality,
          title: this.title,
          departdate: this.departdate,
          harga: this.harga,
          adult: this.adult,
          child: this.child,

          aksi: 'ngemail'
        };
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
          var alertpesan = data.msg;
          if (data.success) {
            this.router.navigate(['/']);
            const toast = await this.loadingCtrl.create({
             message: 'We have received your order',
             duration: 2000
            });
            toast.present();
          } else {
            const toast = await this.loadingCtrl.create({
              message: alertpesan,
              duration: 2000
            });
          }
        });

    }
  }
  goBack() {
    // window.history.back();
    this.location.back();

    console.log( 'goBack()...' );
  }
}