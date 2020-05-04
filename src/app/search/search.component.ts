import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  faSearch = faSearch;

  constructor(public dialogRef: MatDialogRef<SearchComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
