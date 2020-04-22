import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  allowedFeature=false;
  featureStatus='No feature was added';

  constructor() {  
    console.log("success constructor");

  }

  ngOnInit() {
    /*setTimeout(()=>{

      this.allowedFeature=true; 
     },2000);*/

     console.log("success init");
  }

  public onFeatureChanges()
  {
    console.log("Event triggered");
    this.featureStatus='Feature has been added';
  }

}
