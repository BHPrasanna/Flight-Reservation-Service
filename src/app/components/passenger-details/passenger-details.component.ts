import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reservation } from 'src/app/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit{
  public flightData:any;
  id: any;
  constructor(private service:ReservationService,private router:Router,private route:ActivatedRoute){}
  reservation:Reservation = new Reservation('','','','','','','','','');
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
    })
    
    this.service.getFlight(Number.parseInt(this.id)).subscribe(
      (res:any)=>{
        this.flightData=res;
        console.log(res);
      }
    )
  }
  OnConfirm(){
    this.reservation.flightId=this.flightData.id;
    console.log( this.reservation.flightId);
    this.service.SaveReservation(this.reservation).subscribe((res:any)=>{
      this.router.navigate(['/confirm',res.id]);
    })
    
  }
}
