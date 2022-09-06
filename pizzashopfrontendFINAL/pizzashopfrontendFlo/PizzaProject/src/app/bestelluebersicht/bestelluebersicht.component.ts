import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BridgePizzaOrderData } from '../models/bridge-pizza-order-data';
import { OrderData } from '../models/order-data';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-bestelluebersicht',
  templateUrl: './bestelluebersicht.component.html',
  styleUrls: ['./bestelluebersicht.component.css']
})
export class BestelluebersichtComponent implements OnInit {

  tempPreis: number = 0;
  orderDone: boolean = false;

  public kundeForm: FormGroup = new FormGroup({

    vorname: new FormControl('', [Validators.required]),
    nachname: new FormControl('', [Validators.required]),
    strasse: new FormControl('', [Validators.required]),
    hausnummer: new FormControl('', [Validators.required]),
    stadt: new FormControl('', [Validators.required]),
    plz: new FormControl('', [Validators.required]),
  })



  constructor(private service: PizzaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tempPreis = this.service.getSumme();
  }


  submit() {

    //Order absenden -> orderId zwischenspeichern
      var orderdata: OrderData = {

        //id automatisch in db gesetzt
        vorname: this.kundeForm.get('vorname')?.value,
        nachname: this.kundeForm.get('nachname')?.value,
        strasse: this.kundeForm.get('strasse')?.value,
        stadt: this.kundeForm.get('stadt')?.value,
        plz: this.kundeForm.get('plz')?.value,
        hausnummer: this.kundeForm.get('hausnummer')?.value,
        fertig: false,
        preis: this.service.getSumme()
      }

      this.service.addOrderData(orderdata).subscribe(
        (result: OrderData) => {
          var tempOrderId = result.id!;
      


        //Bridge Tabelle Daten sammeln und ab db absenden (mit OrderId von der Order)
          this.service.getCart().forEach((piz: Pizza) => {

            var bridgepizzaorderdata: BridgePizzaOrderData = {

              //id automatisch in db gesetzt
              orderID: tempOrderId, //im subscribe in tempOrderId gespeichert damit hier verwendbar
              pizzaID: piz.id,
              anzahl: 1  //TODO
            }

            console.log("orderID: " + bridgepizzaorderdata.orderID + "pizzaID: " + bridgepizzaorderdata.pizzaID + "anzahl: " + bridgepizzaorderdata.anzahl)

            //an db senden
            this.service.addBridgePizzaZuOrderData(bridgepizzaorderdata).subscribe();
          });
   

          this.refresh();
        });
  }


  refresh() {
    this.orderDone = true;
    this.service.Cart = [];

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["./"], { relativeTo: this.route }).then(() => {

      this.router.onSameUrlNavigation = "ignore";
    })
  }
}
