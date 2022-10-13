import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({providedIn: 'root'})

export class BookingService {

  constructor(private http: HttpClient) { }


  // add booking
  addBooking(newBooking): Observable<any>  {

    const body = JSON.stringify(newBooking)
    const headers = { 'content-type': 'application/json'}

    return this.http.post('http://localhost:3000/api/bookings', body, {'headers': headers})
    
  }

}
