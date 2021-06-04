import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../common/global-constants';


@Component({
  selector: 'app-maps-test',
  templateUrl: './maps-test.page.html',
  styleUrls: ['../our-vehicles/our-vehicles.page.scss'],
})
export class MapsTestPage implements OnInit {
  footer = GlobalConstants.sitefooter;
  posisi={
    lat:-6.1753942,
    long:106.827183,
    zoom:11
  }
  markers = [
    //jaksel
    { 
      lat: -6.3005961,
      lng: 106.8339636,
      label: 'Bayu Buana Perkantoran Hijau Arkadia',
      dirurl:'https://goo.gl/maps/PkFTtRDV26kQFd5t8',
      iconUrl: 'https://bayubuanatravel.com/media/cf3c1dea-c562-491f-b979-ca2d8cda6d61/tQgG5A/favicon.png'
    },
    { 
      lat: -6.30160613,
      lng: 106.83366716,
      label: 'Bayu Buana Arkadia Menara F',
      dirurl:'https://goo.gl/maps/nbmCccucxPFWvCtXA'
    },
    { 
      lat: -6.22646495,
      lng: 106.8085237,
      label: 'Bayu Buana Equity Tower',
      dirurl:'https://goo.gl/maps/txsBGwYUEF2PU21m6'
    },
    { 
      lat: -6.26532765,
      lng:  106.78465762,
      label: 'Bayu Buana Mall Pondok Indah',
      dirurl:'https://goo.gl/maps/GAGDeR7tamfuisda8'
    },
    //jakut
    { 
      lat: -6.12757855,
      lng: 106.790964,
      label: 'Emporium Pluit Mall',
      dirurl:'https://goo.gl/maps/tBo1scN3EkhBDSkMA',
      iconUrl: 'https://bayubuanatravel.com/media/cf3c1dea-c562-491f-b979-ca2d8cda6d61/tQgG5A/favicon.png'
    },
    { 
      lat: -6.15237933, 
      lng: 106.90923035,
      label: 'Bayu Buana Kelapa Gading',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //jakbar
    { 
      lat: -6.1882573, 
      lng: 106.73388972,
      label: 'Bayu Buana Puri Indah',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //jakpus
    { 
      lat: -6.1639512,
      lng: 106.8233567,
      label: 'Bayu Buana Travel Head Office',
      dirurl:'https://goo.gl/maps/PkFTtRDV26kQFd5t8'
    },
    { 
      lat: -6.1855771, 
      lng: 106.82213828,
      label: 'Bayu Buana Menara Thamrin',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //tanggerang
    { 
      lat: -6.2730266, 
      lng: 106.7160569,
      label: 'Bayu Buana Bintaro',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    { 
      lat: -6.2390251, 
      lng: 106.6306121,
      label: 'Bayu Buana Gading Serpong',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //bogor 
    { 
      lat: -6.6053, 
      lng: 106.8083467,
      label: 'Bayu Buana Bogor',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //bandung 
    { 
      lat: -6.9039973, 
      lng: 107.597844,
      label: 'Bayu Buana Bandung',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //cilegon 
    { 
      lat: -6.0361278, 
      lng: 106.0429151,
      label: 'Bayu Buana Cilegon',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //bali 
    { 
      lat: -8.6736705, 
      lng: 115.1658788,
      label: 'Bayu Buana Bali',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //surabaya 
    { 
      lat: -7.221141, 
      lng: 112.7450157,
      label: 'Bayu Buana Surabaya',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    { 
      lat: -8.6736705, 
      lng: 115.1658788,
      label: 'Bayu Buana Bali',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //balikpapan 
    { 
      lat: -1.2632685, 
      lng: 116.7423626,
      label: 'Bayu Buana Balikpapan',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //pekanbaru 
    { 
      lat: 0.1721744, 
      lng: 101.4127641,
      label: 'Bayu Buana Travel Network Pekanbaru',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //jambi 
    { 
      lat: -1.5040491, 
      lng: 103.660185,
      label: 'Bayu Buana Travel Network Jambi',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    //ho
    { 
      lat: -6.1662548,
      lng: 106.8232197,
      label: 'Head Office',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    { 
      lat: -6.1639512,
      lng: 106.8233567,
      label: 'Tour Centre',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    { 
      lat: -6.1640099,
      lng: 106.8230023,
      label: 'M I C E',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    { 
      lat: -6.1656587, 
      lng: 106.8230887,
      label: 'National Corporate Division',
      dirurl:'https://goo.gl/maps/yer2EJ6MpBsyQSoU8'
    },
    ];
  constructor() { }

  ngOnInit() {
  } 
  changemaps(countrycode){
    console.log(countrycode);
    if(countrycode=='jaksel'){
      this.posisi.lat=-6.2544304;
      this.posisi.long=106.8017037;
      this.posisi.zoom=13;
    }else if(countrycode=='jakut'){
      this.posisi.lat=-6.1279107;
      this.posisi.long=106.8625115;
      this.posisi.zoom=13;
    }else if(countrycode=='jakbar'){
      this.posisi.lat=-6.198216;
      this.posisi.long=106.7347769;
      this.posisi.zoom=14;
    }else if(countrycode=='jakpus'){
      this.posisi.lat=-6.1719155;
      this.posisi.long=106.8268092;
      this.posisi.zoom=14;
    }else if(countrycode=='tang'){
      this.posisi.lat=-6.2692719;
      this.posisi.long=106.6613073;
      this.posisi.zoom=13;
    }else if(countrycode=='bgr'){
      this.posisi.lat=-6.6063286;
      this.posisi.long=106.8076765;
      this.posisi.zoom=13;
    }else if(countrycode=='bdg'){
      this.posisi.lat=-6.9037225;
      this.posisi.long=107.6023643;
      this.posisi.zoom=10;
    }else if(countrycode=='cil'){
      this.posisi.lat=-6.0055044;
      this.posisi.long=106.024951;
      this.posisi.zoom=11;
    }else if(countrycode=='dps'){
      this.posisi.lat=-8.6348106;
      this.posisi.long=115.0539535;
      this.posisi.zoom=11;
    }else if(countrycode=='sub'){
      this.posisi.lat=-7.3802281;
      this.posisi.long=112.8295724;
      this.posisi.zoom=9;
    }else if(countrycode=='blk'){
      this.posisi.lat=-1.2073999;
      this.posisi.long=116.9197735;
      this.posisi.zoom=9;
    }else if(countrycode=='pku'){
      this.posisi.lat=-0.417011;
      this.posisi.long=100.422914;
      this.posisi.zoom=8;
    }else if(countrycode=='jam'){
      this.posisi.lat=-2.007259;
      this.posisi.long=103.6289448;
      this.posisi.zoom=8;
    }else if(countrycode=='ho'){
      this.posisi.lat=-6.1645999;
      this.posisi.long=106.8252263;
      this.posisi.zoom=17;
    }

  }
  
}
