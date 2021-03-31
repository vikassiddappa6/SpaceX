import { Component, OnInit } from '@angular/core';
import { MissionserviceService } from '../missionservice.service';


@Component({
  selector: 'app-mission2',
  templateUrl: './mission2.component.html',
  styleUrls: ['./mission2.component.css']
})
export class Mission2Component implements OnInit {

  constructor(private missionService:MissionserviceService) { }

 

  UniqueYearValue:any;
  UniqueLanding:any;
  UniqueLaunch:any;

  yearUnique:any;
  missionListData:any;

  ngOnInit(): void {
    this.getMissionList();
    this.UniqueYearValue="";
    this.UniqueLanding="";
    this.UniqueLaunch="";
  }




  getMissionList()
  {
      this.missionService.loadmission().subscribe(
        data=>{
             this.missionListData = data;

              const uniqueYear = new Set();
              for(const objects of this.missionListData){
                uniqueYear.add(objects.launch_year)
              }
              this.yearUnique = Array.from(uniqueYear)
          }); 
  }



 lauchYear(year){

 // this.activeMessage = !this.activeMessage;
 //this.activeMessage = year;
  //this.selected = year; 
 // this.selected = (this.selected === year ? null : year); 
  if(year === this.UniqueYearValue)
  {
     this.UniqueYearValue = '';
   }else
   {
     this.UniqueYearValue = year;
    }

    //console.log("SuccessLand : "+this.UniqueLanding);
  //console.log("SuccessLaunch : "+this.UniqueLaunch);
  //console.log("Year : "+this.UniqueYearValue);


  this.missionService.loadFilterMission(this.UniqueLaunch,this.UniqueLanding,this.UniqueYearValue).subscribe(
    data=>{
      this.missionListData = data;
      }); 
    
 }




isActive(item) {
  return this.UniqueYearValue === item;
};

isActiveLanding(item) {
  return this.UniqueLanding === item;
};
isActiveLaunching(item) {
  return this.UniqueLaunch === item;
};



missionLanding(LandingBoolean){

  if(LandingBoolean === this.UniqueLanding)
  {
     this.UniqueLanding = '';
   }else
   {
     this.UniqueLanding = LandingBoolean;
    }
    

  //console.log("SuccessLand : "+this.UniqueLanding);
  //console.log("SuccessLaunch : "+this.UniqueLaunch);
 // console.log("Year : "+this.UniqueYearValue);

  this.missionService.loadFilterMission(this.UniqueLaunch,this.UniqueLanding,this.UniqueYearValue).subscribe(
    data=>{
      this.missionListData = data;
      }); 
}


missionLaunching(LaunchgBoolean){

  if(LaunchgBoolean === this.UniqueLaunch)
  {
     this.UniqueLaunch = '';
   }else
   {
     this.UniqueLaunch = LaunchgBoolean;
    }

 // console.log("SuccessLand : "+this.UniqueLanding);
  //console.log("SuccessLaunch : "+this.UniqueLaunch);
  //console.log("Year : "+this.UniqueYearValue);
  
  this.missionService.loadFilterMission(this.UniqueLaunch,this.UniqueLanding,this.UniqueYearValue).subscribe(
    data=>{
      this.missionListData = data;
      }); 

}



 


}
