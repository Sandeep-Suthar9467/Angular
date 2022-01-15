import { Component, OnInit ,Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog'
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'assign';
  li:any;
  // latitude = 26.05;
  // longitude = 28.5;
  lis=[{"Lat":19.098685,"Lng":72.883301,"r_volt_status":0,"r_load_status":0,"r_mcb_status":0,"r_pf_status":0,"_id":"128","mac_id":"128","panel_name":"1"}];
  constructor(private http : HttpClient,public dialog: MatDialog){
     
}
 
  ngOnInit(): void {
    this.http.get('http://uat.lightingmanager.in/panel/gettestlist?org_id=3')
    .subscribe(Response => { 
      console.log(Response)
      this.li=Response;
      this.lis=this.li.result;
      
    });
    
  }
  openDialog(li: any):void{
    this.dialog.open(DialogOverviewExampleComponent,{data: li})
  
  }

  openGoogelMapsModal(li: any):void{
    this.dialog.open(GoogleMapsComponent,{data: li})
  }

}


