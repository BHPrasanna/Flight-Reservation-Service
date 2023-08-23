import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria } from 'src/app/criteria';
import { LoginService } from 'src/app/services/login.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit{
  criteria:Criteria = new Criteria('','','');
  search:boolean=false;
  constructor(private loginService:LoginService, private reservationService:ReservationService,private router:Router){}
  ngOnInit(): void{
     this.loginService.login();
  }
  onSubmit() {
    // Your submit logic here
    this.reservationService.getFlights(this.criteria).subscribe((res:any)=>{
      this.search=true;
      console.log(res);
        this.reservationService.flightData=res;
       
        this.router.navigate(['/displayFlights']);
    })
  }
}
