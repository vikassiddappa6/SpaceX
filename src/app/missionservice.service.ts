import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MissionserviceService {

  constructor(private http:HttpClient) { }

  loadmission()
  {
    return this.http.get<any>("https://api.spacexdata.com/v3/launches?limit=100");
  }

  loadFilterMission(launchValue,landValue,yearValue)
  {

    

   // return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100"+ '&launch_year='+yearValue + '&launch_success='+launchValue + '&land_success='+landValue);
    
   if(yearValue ==="" && landValue ===""){
    
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100" + '&launch_success='+launchValue);
   }
   else if(yearValue ===""){
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100" + '&launch_success='+launchValue + '&land_success='+landValue);
   }
   else {

    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100" + '&launch_success='+launchValue + '&land_success='+landValue + '&launch_year='+yearValue);
   }



  
  }

}
