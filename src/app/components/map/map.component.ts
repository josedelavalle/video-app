import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 0;
  lng: number = 0;
  coords: coords = {};
  userData: any;
  labelOptions = {
    text: 'Some Text',
  }
  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getUserData().subscribe(userData => { 
      this.userData = userData;
      var coords = this.userData.loc.split(",");
      this.coords = {lat: Number(coords[0]), lng: Number(coords[1])};
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);
    this.coords = $event.coords;
  }
}

interface coords {
  lat: number;
  lng: number;
}
