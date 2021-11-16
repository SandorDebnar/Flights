import { Component, Input, OnInit, Output } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {


  @Output() isflightsVisible = new EventEmitter();
  @Input() clickedCustomerId:any;

  flights:Flight[]=[{id:0,customer_id:0,flightNr:''}];

  constructor(private flightservice:FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(){
    this.flightservice.getAllFlights().subscribe(data=>{
      this.flights=data;
    })
  }

  isFlightVisible(flight:Flight){
      
      this.isflightsVisible.emit(this.flights.find(flight=> flight.customer_id =this.clickedCustomerId));
  }




}
