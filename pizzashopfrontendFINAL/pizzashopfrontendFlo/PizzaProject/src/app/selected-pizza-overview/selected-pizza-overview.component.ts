import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BestelluebersichtComponent } from '../bestelluebersicht/bestelluebersicht.component';
import { Cart } from '../cart';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-selected-pizza-overview',
  templateUrl: './selected-pizza-overview.component.html',
  styleUrls: ['./selected-pizza-overview.component.css']
})
export class SelectedPizzaOverviewComponent implements OnInit {

  constructor(private service: PizzaService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ausgewaehltePizzen: Pizza[] = []
  Summe: number = 0;
  
  ngOnInit(): void {
    this.ausgewaehltePizzen = this.service.Cart;

    //Summe berechnen
    this.ausgewaehltePizzen.forEach((element: Pizza) => {
      this.Summe += element.pizzaPreis;
    });

    //runden
    this.Summe = Math.round(this.Summe * 100) / 100;
  }

  removePizzaFromCart(cartIndex: number) {

    this.ausgewaehltePizzen.splice(cartIndex, 1);
    this.refresh();
  }

  bestellen() {
    this.dialog.open(BestelluebersichtComponent, { panelClass: 'mat-elevation-z2' });
    this.service.Summe = this.Summe;
    this.refresh();
  }

  refresh(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["./"], { relativeTo: this.route }).then(() => {

      this.router.onSameUrlNavigation = "ignore";
    })
  }
}
