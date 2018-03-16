import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 0;
  lng: number = 0;
  userData: any;
  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getUserData().subscribe(userData => { 
      this.userData = userData;
      
      var coords = this.userData.loc.split(",");
      console.log(coords);
      this.lat = Number(coords[0]);
      this.lng = Number(coords[1]);
    }
}
