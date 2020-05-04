import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
