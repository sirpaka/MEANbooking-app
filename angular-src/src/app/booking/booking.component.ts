import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from '../booking.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookingService]
})
export class BookingComponent  {
  @ViewChild('booking') bookingForm: NgForm;

  submitted= false;
  bookingData =  {
    date: '',
    from: '',
    to: '',
    apptmaker: '',
    email: '',
    tel: '',
    billing: ''
  }

  constructor(private http: HttpClient, private bookingService: BookingService) { }

  onSubmit(appt){

    this.submitted= true;
    this.bookingData.date=this.bookingForm.value.date;
    this.bookingData.from=this.bookingForm.value.apptTime.from;
    this.bookingData.to=this.bookingForm.value.apptTime.to;
    this.bookingData.apptmaker=this.bookingForm.value.apptmaker;
    this.bookingData.email=this.bookingForm.value.email;
    this.bookingData.tel=this.bookingForm.value.tel;
    this.bookingData.billing=this.bookingForm.value.billing;
  
   
    const newBooking = {
      date: this.bookingData.date,
      from: this.bookingData.from,
      to: this.bookingData.to,
      booker_name: this.bookingData.apptmaker,
      email: this.bookingData.email,
      tel: this.bookingData.tel,
      billing_data: this.bookingData.billing
    }

  const body = JSON.stringify(newBooking)
  const headers = { 'content-type': 'application/json'}

  this.http
    .post<any>('http://localhost:3000/api/bookings', body, {'headers': headers})
    .subscribe((res) => console.log(res));
  
  this.bookingForm.reset();
  }

}


// import { Component, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { BookingService } from '../booking.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-booking',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.css'],
//   providers: [BookingService]
// })
// export class BookingComponent  {
//   @ViewChild('bookingData') bookingForm: NgForm;

//   submitted= false;
//   bookingData =  {
//     date: '',
//     from: '',
//     to: '',
//     bookingMaker: '',
//     email: '',
//     tel: '',
//     billing: ''
//   }

//   constructor(private http: HttpClient, private bookingService: BookingService) { }

//   onSubmit(booking){

//     this.submitted= true;
//     this.bookingData.date=this.bookingForm.value.bookedDate;
//     this.bookingData.from=this.bookingForm.value.bookedTime.from;
//     this.bookingData.to=this.bookingForm.value.bookedTime.to;
//     this.bookingData.bookingMaker=this.bookingForm.value.bookingMaker;
//     this.bookingData.email=this.bookingForm.value.email;
//     this.bookingData.tel=this.bookingForm.value.tel;
//     this.bookingData.billing=this.bookingForm.value.billing;
  
   
//     const newBooking = {
//       date: this.bookingData.date,
//       from: this.bookingData.from,
//       to: this.bookingData.to,
//       booker_name: this.bookingData.bookingMaker,
//       email: this.bookingData.email,
//       tel: this.bookingData.tel,
//       billing_data: this.bookingData.billing
//     }

//   const body = JSON.stringify(newBooking)
//   const headers = { 'content-type': 'application/json'}

//   this.http
//     .post<any>('http://localhost:3000/api/bookings', body, {'headers': headers})
//     .subscribe((res) => console.log(res));
  
//   this.bookingForm.reset();
//   }

// }
