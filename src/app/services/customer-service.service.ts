import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';



const httpOptions ={
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class CustomerServiceService {
  url:string = "http://localhost:3000/customers";

  constructor(private http: HttpClient) { 

  }

  getAllCustomers(){
    return this.http.get<Customer[]>(this.url);
  }

  registerCustomer(customer:Customer){
      return this.http.post<Customer>(this.url,customer,httpOptions);
  }

  deleteCustomer(customerId:any){
    return this.http.delete<Customer>(this.url +"/"+customerId,httpOptions);
  }

  updateCountry(customer:Customer) : Observable<Customer>{
    return this.http.put<Customer>(this.url+"/"+customer.id,customer,httpOptions);

  }
}
