import {AfterViewChecked, ChangeDetectorRef, Component, HostListener, Inject} from '@angular/core';
import { faSearch, faBars, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {SearchComponent} from './search/search.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
  title = 'Localia';
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faUser = faUser;
  faMenu = faBars;
  mediumSize: boolean;
  constructor(private cdRef: ChangeDetectorRef, public dialog: MatDialog,
              ) {
  }
  openDialog(): void {
    document.querySelector('.container-fluid')
      .classList.add('backdrop');
    const dialogRef = this.dialog.open(SearchComponent, {
      width: '250px',
      position: {
        top: '40px',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngAfterViewChecked() {
    this.mediumSize = window.innerWidth < 760;
    this.cdRef.detectChanges();
  }
}
