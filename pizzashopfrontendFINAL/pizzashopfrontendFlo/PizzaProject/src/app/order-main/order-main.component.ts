import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-order-main',
  templateUrl: './order-main.component.html',
  styleUrls: ['./order-main.component.css']
})
export class OrderMainComponent implements OnInit {

  PizzaList: Pizza[] = [];

  constructor(private service: PizzaService) { }

  ngOnInit(): void {

    this.getPizzas();

    console.log("Alle Pizzen geladen!");
  }

  async getPizzas() {

    this.service.getPizzaList().subscribe(data => {

      console.log(data);

      this.PizzaList = data;

    });
  }
}
