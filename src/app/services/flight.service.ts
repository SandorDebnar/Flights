import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url:string ="http://localhost:3000/customerFlights";
  constructor(private http : HttpClient) { }


  getAllFlights(){
    return this.http.get<Flight[]>(this.url);
  }
}
