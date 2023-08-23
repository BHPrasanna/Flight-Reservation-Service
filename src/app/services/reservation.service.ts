import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  flightsUrl:string='http://127.0.0.1:8000/flightServices/findflights';
  singleflightUrl:string='http://127.0.0.1:8000/flightServices/flights';
  saveReservationUrl:string='http://127.0.0.1:8000/flightServices/save_reservation';
  flightData:any;
  constructor(private http:HttpClient, private loginService:LoginService) { }
  public getFlights(criteria: any):any{
    return this.http.post(this.flightsUrl,criteria,this.loginService.httpOptions);
  }
  public getFlight(id:number):any{
    return this.http.get(this.singleflightUrl+'/'+id,this.loginService.httpOptions);
  }
  public SaveReservation(reservation:any):any{
      return this.http.post(this.saveReservationUrl,reservation,this.loginService.httpOptions);
  }
}
