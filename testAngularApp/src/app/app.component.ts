import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngularApp';
  featureStatus='No feature was added';
  public onFeatureChanges(event : Event)
  {
    console.log("Event triggered");
    this.featureStatus='Feature has been added';
  }
}
