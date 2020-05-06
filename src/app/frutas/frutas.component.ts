import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faMinus = faMinus;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    document.getElementById('button').classList.add('clicked');
  }
  increase(){
    const currentValue = parseInt((document.getElementById('input') as HTMLInputElement).value, 10);
    (document.getElementById('input') as HTMLInputElement).value = '' + (currentValue + 1);
  }
  decrease(){
    const currentValue = parseInt((document.getElementById('input') as HTMLInputElement).value, 10);
    if (currentValue === 1){
      document.getElementById('button').classList.remove('clicked');
    } else {
      (document.getElementById('input')  as HTMLInputElement).value = '' + (currentValue - 1) ;
    }
  }

}
