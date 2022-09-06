import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { PizzaOverviewComponent } from './pizza-overview/pizza-overview.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaProject';

  constructor(public dialog: MatDialog) {
  }

  routeToOrderOverview(): void {
    this.dialog.open(LoginComponent, { panelClass: 'mat-elevation-z8' });
  }
}
