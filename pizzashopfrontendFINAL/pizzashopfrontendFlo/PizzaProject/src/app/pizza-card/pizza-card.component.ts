import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {

  @Input() Id!: number;
  @Input() PizzaName!: string;
  @Input() PizzaBeschreibung!: string;
  @Input() PizzaPreis!: number;
  @Input() imageSrc?: String;

  constructor(private service: PizzaService, private router: Router, private route: ActivatedRoute) {
  }

  addToCart() {

    var tempPizza: Pizza = {
      id: this.Id,
      pizzaName: this.PizzaName,
      pizzaBeschreibung: this.PizzaBeschreibung,
      pizzaPreis: this.PizzaPreis
    }

    this.service.addPizzaToCart(tempPizza);
    console.log(tempPizza);

    this.refresh();
  }


  

  ngOnInit(): void {

    this.imageSrc = "assets/PizzenBilder/" + this.PizzaName + ".jpg";
    console.log(this.imageSrc);
  }

  refresh(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["./"], { relativeTo: this.route }).then(() => {

      this.router.onSameUrlNavigation = "ignore";
    })
  }

}
