import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-anlegen',
  templateUrl: './anlegen.component.html',
  styleUrls: ['./anlegen.component.css']
})
export class AnlegenComponent implements OnInit {
  @Output() customerRegister = new EventEmitter();
  @Output() getBack= new EventEmitter();
  
  newCustomer: Customer = { id:0, lastname: '', firstname: '', age: 0, country: '', email: '', gender: '' };
  isNewCustToCreate:boolean=true;

  constructor() { }


  ngOnInit(): void {
  }

  createCustomer() {
    this.customerRegister.emit(this.newCustomer);
    this.newCustomer = { id: 0, lastname: '', firstname: '', age: 0, country: '', email: '', gender: '' };
  }

  isAktiv() {
    if (this.newCustomer.id != 0 && this.newCustomer.firstname != '' && this.newCustomer.lastname != '' &&
      this.newCustomer.gender != '' && this.newCustomer.email != '') {
      return false;
    }
    else
      return true;
  }
  
  cancelCreate(){
    this.isNewCustToCreate=false;
    this.getBack.emit(this.isNewCustToCreate);
  }
}
