import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import jsSHA from 'jssha';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
 
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl =  'https://tiketfinder.com/api';
  imageUrl = 'https://tiketfinder.com/api';

  //baseUrl =  'http://localhost/bayubuana';
  //imageUrl = 'http://localhost/bayubuana';
  
  RCMbookingurl="https://apis.rentalcarmanager.com/booking/v3.2/";
  constructor(private http: HttpClient) {}
 
  getPokemon(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/hotel/list/?offset=${offset}&limit=0`)
      .pipe(
        map(result => {
          return result['results'];
        }), 
        /*map(pokemon => {
          return pokemon.map((poke, index) => {
            poke.image = this.getPokeImage(offset + index + 1);
            poke.pokeIndex = offset + index + 1;
            return poke;
          }); 
        })*/
      );
  }
  getCar(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/hotel/list/?category=car`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getCampervan(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/hotel/list/?category=campervan`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getawd(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/hotel/list/?category=4wd`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getCategoryDoc(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/trip/listcategory`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getdoc(offset = 0) {
    return this.http
    .get(`${this.baseUrl}/v2/trip/list/?category=uk-and-europe`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getdocau(offset = 0) {
    return this.http
    .get(`${this.baseUrl}/v2/trip/list?category=australia`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getdocusa(offset = 0) {
    return this.http
    .get(`${this.baseUrl}/v2/trip/list?category=amerika-and-afrika`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getdocasia(offset = 0) {
    return this.http
    .get(`${this.baseUrl}/v2/trip/list?category=asia`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getdocmidasia(offset = 0) {
    return this.http
    .get(`${this.baseUrl}/v2/trip/list?category=middle-east`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }


  
   getSlider(offset = 0){
	  return this.http
      .get(`${this.baseUrl}/v2/homeslide/?offset=${offset}&limit=0`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        
      );
	  
  }
  
  getMenu(offset = 0){
	  return this.http
      .get(`${this.baseUrl}/menu/?offset=${offset}`)
      .pipe(
        map(result => {
          return result['menu'];
        }),
        
      );
	  
  }

  getPromo(offset = 0){
	  return this.http
      .get(`${this.baseUrl}/v2/promo/list/?offset=${offset}&limit=0`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        
      );
	  
  }
  getPromoDetails(index) {
    return this.http.get(`${this.baseUrl}/v2/promo/detail/${index}`)
	 .pipe(
      map(poke => {
		//let loc = Object.keys(poke['address']);
        //poke['loci'] =loc.map(spriteKey => poke['address'][spriteKey]);
        return poke;
      })
    );
  }
 
  findPokemon(search) {
    return this.http.get(`${this.baseUrl}/v2/hotel/list/${search}`)
	 .pipe(
      map(pokemon => {
        pokemon['thumb'] = this.getPokeImage(pokemon['id']);
        pokemon['pokeIndex'] = pokemon['url'];
        return pokemon;
      })
    );
  }
 
  getPokeImage(index) {
    return `${this.imageUrl}${index}.jpg`;
  }
 
  getPokeDetails(index) {
    return this.http.get(`${this.baseUrl}/v2/hotel/detail/${index}`)
	 .pipe(
      map(poke => {
		let slides = Object.keys(poke['slides']);
        poke['images'] = slides
          .map(spriteKey => poke['slides'][spriteKey]['url'])
          .filter(img => img);
        return poke;
      })
    );
  }
  
    getAVailloc(index) {
    return this.http.get(`${this.baseUrl}/v2/hotel/detail/${index}`)
	 .pipe(
      map(poke => {
		let loc = Object.keys(poke['available_locations']);
        poke['loci'] =loc.map(spriteKey => poke['available_locations'][spriteKey]);
        return poke;
      })
    );
  }
  
	getAVaillocDetails(index) {
    return this.http.get(`${this.baseUrl}/v2/tour/detail/${index}`)
	 .pipe(
      map(poke => {
		//let loc = Object.keys(poke['address']);
        //poke['loci'] =loc.map(spriteKey => poke['address'][spriteKey]);
        return poke;
      })
    );
  }
  
  getAVailDetails(index) {
    return this.http.get(`${this.baseUrl}/v2/hotel/detail/${index}`)
	 .pipe(
      map(poke => {
		let loc = Object.keys(poke['specification']);
        poke['locic'] =loc.map(spriteKey => poke['specification'][spriteKey]);
        return poke;
      })
    );
  }
 
  getLocations(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/tour/list/?offset=${offset}&limit=0`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        /*map(pokemon => {
          return pokemon.map((poke, index) => {
            poke.image = this.getPokeImage(offset + index + 1);
            poke.pokeIndex = offset + index + 1;
            return poke;
          });
        })*/
      );
  }
  
  getKomen(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/review/list/?offset=${offset}&limit=0`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        
      );
  }
  getPokeLocations(index) {
    return this.http.get(`${this.baseUrl}/v2/tour/detail/${index}`)
	 .pipe(
      map(poke => {
        /*
        let slides = Object.keys(poke['slides']);
        poke['images'] = slides
          .map(spriteKey => poke['slides'][spriteKey]['url'])
          .filter(img => img);
        */
        return poke;
      })
    );
  }
  

  getTripDetails(index) {
    return this.http.get(`${this.baseUrl}/v2/trip/detail/${index}`)
	 .pipe(
      map(poke => {
        return poke;
      })
    );
  }
  getMenugroup(offset = 0){
    return this.http.get(`${this.baseUrl}/menu/group/footer/?offset=${offset}&limit=0`)
    .pipe(
      map(result => {
        return result['results'];
      }),
    );
  }
  
  getPagesDetail(index) {
    return this.http.get(`${this.baseUrl}/v2/staticpage/detail/${index}`)
	 .pipe(
      map(poke => {
    /*
        let slides = Object.keys(poke['slides']);
        poke['images'] = slides
          .map(spriteKey => poke['slides'][spriteKey]['url'])
          .filter(img => img);
         */ 
        return poke;
      })
    );
  }
  getSpecials(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/special/list/?offset=${offset}&limit=0`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        
      );
  }
  getSpecialsDetail(index) {
    return this.http.get(`${this.baseUrl}/v2/special/detail/${index}`)
	 .pipe(
      map(poke => {
   
        return poke;
      })
    );
  }
  getBlog(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/blog/list/?offset=${offset}&limit=0`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        
      );
  }
  getBlogDetails(index) {
    return this.http.get(`${this.baseUrl}/v2/blog/detail/${index}`)
	 .pipe(
      map(poke => {
   
        return poke;
      })
    );
  }
  getLocationCategorydomestic(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/tour/list?category=domestic`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getLocationCategorycostsaver(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/tour/list?category=cost-saver`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getLocationCategoryonedaytour(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/tour/list?category=one-day-tour`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getLocationCategorylandtour(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/tour/list?category=land-tour`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getLocationCategorysa(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/location/list?category=sa`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getLocationCategorywa(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/location/list?category=wa`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }
  getLocationCategoryt(offset = 0) {
    return this.http
      .get(`${this.baseUrl}/v2/location/list?category=tas`)
      .pipe(
        map(result => {
          return result['results'];
        }),
      );
  }

  
  //bookings 
  bookingGetVehDetail(rcmid) {
    return this.http
      .get(`https://bookings.wickedcampers.com.au/newapi/v2/bookings/getvehicledata/${rcmid}`)
      .pipe(
        map(result => {
          return result;
        }),
      );
  }
  bookingGetSlider(rcmid) {
    return this.http
      .get(`https://bookings.wickedcampers.com.au/newapi/v2/bookings/getslider/${rcmid}`)
      .pipe(
        map(result => {
          return result;
        }),
      );
  }
  bookingGetvcat() {
    return this.http
      .get(`https://bookings.wickedcampers.com.au/newapi/v2/bookings/getcatlist`)
      .pipe(
        map(result => {
          return result;
        }),
      );
  }

  rcmgetkey(country="au"){
    let key={
      key:"QXVXaWNrZWRDYW1wZXJzW3VuZGVmaW5lZF18YnVkaUB3aWNrZWRjYW1wZXJzLmNvbS5hdXxkT2Q5eE41bw==",
      secret:"P3BJiKohGrql2bAmDlj8Jy0K1OMiLGqG"
    };
    if(country=="nz"){
      key.key="QXVXaWNrZWROWlt1bmRlZmluZWRdfGJ1ZGlAd2lja2VkY2FtcGVycy5jb20uYXV8Qm9wOWw5NEk=";
      key.secret="0qoHpArN9fMykjh8t0l1mzK2bI5l2dAo"
    } else if(country=="uk"){
      key.key="VUtXaWNrZWQxMDB8YnVkaUB3aWNrZWRjYW1wZXJzLmNvbS5hdXwyNXBtcXhLRw==";
      key.secret="olH91MN90xIriAN0yEJBi4PC4D3ev38z";
    } else if(country=="ca"){
      key.key="R3U1V0dIM1BEQ1g3ZlBoRW1oTXROR1pMTldCY0M3";
      key.secret="K*jEg27r2Xf4Zh3MbYBa=Kfrgm7DMe";
    } else if(country=="af"){
      key.key="WkFXaWNrZWQ4MHxidWRpQHdpY2tlZGNhbXBlcnMuY29tLmF1fG1qRW9pTXFF";
      key.secret="mIec670iDvnj6e1oiGi5s0aJDoKjfmkK";
    } else if(country=="jp"){
      key.key="SlBXaWNrZWQ3MHxidWRpQHdpY2tlZGNhbXBlcnMuY29tLmF1fHpHcFB0aEhF";
      key.secret="mklML4zka6kOviOtLGeeO57KKJ4zyj25";
    } 
    return key;
  }
  getRCMLocation(country="au"){
    let key=this.rcmgetkey(country);
    let signature:any;
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update('{"method":"step1"}');
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request={"method":"step1"}';
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
        
    );
  }
  getRCMAge(country="au"){
    let key=this.rcmgetkey(country);
    let signature:any;
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update('{"method":"driverages"}');
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request={"method":"driverages"}';
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result['results'];
        }),
        
    );
  }
  getRCMVehicles(data){
    let key=this.rcmgetkey(data.country);
    let signature:any;
    let method='{"method":"step2","vehiclecategorytypeid":"0","pickuplocationid":'+data.pickuploc+',"pickupdate":"'+moment(data.pickupdate).format("DD/MM/YYYY")+'","pickuptime":"'+moment(data.pickuptime).format("HH:mm")+'","dropofflocationid":'+data.dropoffloc+',"dropoffdate":"'+moment(data.dropoffdate).format("DD/MM/YYYY")+'","dropofftime":"'+moment(data.dropofftime).format("HH:mm")+'","ageid":'+data.age+',"campaigncode":"'+data.voucher+'"}';
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update(method);
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request='+method;
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  getRCMExtras(data){
    let key=this.rcmgetkey(data.country);
    let signature:any;
    let method='{"method":"step3","vehiclecategorytypeid":'+data.catid+',"pickuplocationid":'+data.pickuploc+',"pickupdate":"'+moment(data.pickupdate).format("DD/MM/YYYY")+'","pickuptime":"'+moment(data.pickuptime).format("HH:mm")+'","dropofflocationid":'+data.dropoffloc+',"dropoffdate":"'+moment(data.dropoffdate).format("DD/MM/YYYY")+'","dropofftime":"'+moment(data.dropofftime).format("HH:mm")+'","ageid":'+data.age+',"vehiclecategoryid":'+parseInt(data.id)+',"campaigncode":"'+data.voucher+'"}';
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update(method);
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request='+method;
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  getRCMcalcTotal(data,mandatory="",opt=""){
    let key=this.rcmgetkey("au");
    let signature:any;
    let optmethod="";
    if(mandatory!=""){
      optmethod=',"mandatoryfees":'+mandatory
      
    }
    if(opt!=""){
      optmethod=optmethod+',"optionalfees":'+opt;
    }
    console.log(optmethod);
    let method='{"method":"calctotal","pickuplocationid":'+data.locid+',"pickupdate":"'+moment(data.pickupdate).format("DD/MM/YYYY")+'","vehiclecategoryid":'+data.carid+',"numberofdays":'+data['noofday']+',"totalrateafterdiscount":'+data.total+',"freedaysamount":'+data.freedays+',"insuranceid":'+data.insuid+',"extrakmsid":'+data.kmsid+optmethod+'}';
    console.log(method);
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update(method);
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request='+method;
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  getRCMSaveBooking(data,customer="",opt=""){
    let key=this.rcmgetkey("au");
    let signature:any;
    let optmethod="";
    //console.log("refidserv:"+sessionStorage.getItem('refid'));
    if(sessionStorage.getItem('refid')){
      optmethod=optmethod+',"referralid":'+sessionStorage.getItem('refid');
    }
    if(customer!=""){
      optmethod=optmethod+',"customer":'+customer
      
    }
    if(opt!=""){
      optmethod=optmethod+',"optionalfees":'+opt;
    }
    //console.log(optmethod);
    let method='{"method":"booking","vehiclecategorytypeid":'+data.vehiclecategorytypeid+',"pickuplocationid":'+data.pickuplocationid+',"pickupdate":"'+moment(data.pickupdate).format("DD/MM/YYYY")+'","pickuptime":"'+moment(data.pickuptime).format("HH:mm")+'","dropofflocationid":'+data.dropofflocationid+',"dropoffdate":"'+moment(data.dropoffdate).format("DD/MM/YYYY")+'","dropofftime":"'+moment(data.dropofftime).format("HH:mm")+'","ageid":'+data.ageid+',"vehiclecategoryid":'+data.vehiclecategoryid+',"bookingtype":'+data.bookingtype+',"insuranceid":'+data.insuranceid+',"extrakmsid":'+data.extrakmsid+',"transmission":'+data.transmission+',"numbertravelling":'+data.numbertravelling+',"remark":"'+data.remark+'","areaofuseid":"'+data.areaofuseid+'","flightin":"'+data.flightin+'","flightout":"'+data.flightout+'"'+optmethod+'}';
    //console.log(method);
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update(method);
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request='+method;
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }

  getRCMBookingInfo(resref){
    let key=this.rcmgetkey("au");
    let signature:any;
    let method='{"method":"bookinginfo","reservationref":"'+resref+'"}';
    console.log(method);
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update(method);
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request='+method;
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }

  getRCMvaulturl(resref){
    let key=this.rcmgetkey("au");
    let signature:any;
    let method='{"method":"getvaulturl","reservationref":"'+resref+'"}';
    console.log(method);
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update(method);
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request='+method;
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  saveRCMvault(resref,data){
    let key=this.rcmgetkey("au");
    let signature:any;
    let method='{"method":"vaultentry","reservationref":"'+resref+'","data":"'+data+'"}';
    console.log(method);
    var shaObj = new jsSHA("SHA-256","TEXT");
    shaObj.setHMACKey(key.secret, "TEXT");
    shaObj.update(method);
    signature = shaObj.getHMAC("HEX");
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded');
    let body='signature='+signature+'&request='+method;
    return this.http
      .post(this.RCMbookingurl+key.key+'?apikey='+key.key,body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  
  getBookingSetting() {
    return this.http
      .get(`${this.baseUrl}/v2/bookings/getsetting`)
      .pipe(
        map(result => {
          return result;
        }),
      );
  }

  //checkin
  getCheckinToken(){
    return this.http.get(`${this.baseUrl}/v2/checkin/gettoken`)
	 .pipe(
    map(result => {
      return result;
    })
    );
  }
  findbooking(token,email,bookno){
    let method='{"method":"findbooking","reservationno":"'+bookno+'","email":"'+email+'"}';
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded').set('Authorization',`Bearer ${token}`);
    let body=method;
    return this.http
      .post('https://api.rentalcarmanager.com/v32/api',body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  getworkflow(token,resref){
    let method='{"method":"workflowchecklist","workflowcode":"checkin","reservationref":"'+resref+'"}';
    
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded').set('Authorization',`Bearer ${token}`);
    let body=method;
    return this.http
      .post('https://api.rentalcarmanager.com/v32/api',body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  editbookingrcm(token,data){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded').set('Authorization',`Bearer ${token}`);
    let body=data;
    return this.http
      .post('https://api.rentalcarmanager.com/v32/api',body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  savedocument(token,data){
    let method=JSON.stringify(data);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded').set('Authorization',`Bearer ${token}`);
    let body=method;
    return this.http
      .post('https://api.rentalcarmanager.com/v32/api',body,{headers: headers,})
      .pipe(
        map(result => {
          return result;
        }),
    );
  }
  signdocument(token,data){
    let method='{"method":"signupload","params":'+JSON.stringify(data)+'}';
    console.log(token);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/x-www-form-urlencoded').set('Authorization',`Bearer ${token}`);
    let body=method;
    return this.http
      .post('https://api.rentalcarmanager.com/v32/api',body,{headers: headers,})
      .pipe(
        map(result => {
          console.log(result);
          return result;
        }),
    );
  }
  cloudinaryupload(data,time,sign){
    console.log(data);
    const formData: FormData = new FormData();
    const current = new Date();
    var timestampx:any=current.getTime();
    //test var
    /*var shadata=`timestamp=${timestampx}&upload_preset=ml_defaultfwFupOe8gyrdW4Yfpk__QGYm2OQ`
    var shaObj = new jsSHA("SHA-1","TEXT");
    shaObj.update(shadata);
    var signature = shaObj.getHash("HEX");
    formData.append("api_key", "276363376599961");
    formData.append("timestamp", timestampx);
    formData.append("signature", signature);
    formData.append('upload_preset', 'ml_default');*/
    //end test
    formData.append('file', data,data['name']);
    formData.append("api_key", "128229988586749");
    formData.append('upload_preset', 'hsfepzh0');
    formData.append("timestamp", time);
    formData.append("signature", sign);
    
    
    return this.http
      .post('https://api.cloudinary.com/v1_1/rentalcarmanager/upload', formData)
      .pipe(
        map(result => {
          return result;
        }),
    );

  }
  
}
