import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { OrderData } from '../models/order-data';
import { PizzaService } from '../pizza.service';
import { BridgePizzaOrderData } from '../models/bridge-pizza-order-data';
import { Pizza } from '../models/pizza';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {
  panelOpenState = false;
  ButtonMSG?: string;

  orders: OrderData[] = [];
  ordersTODO: OrderData[] = [];
  ordersDONE: OrderData[] = [];

  pizzenBestellt: BridgePizzaOrderData[] = [];

  pizzen: Pizza[] = [];

  constructor(private service: PizzaService, private router: Router, private route: ActivatedRoute) { }


  // sagen, das diese bestimmte Bestellung fertig ist anhand der ID
  setOrderDone(todo: OrderData) {

    //set to done
    todo.fertig = true;
    this.service.updateOrderData(todo.id!, todo).subscribe((data: any) => {
      this.refresh();
    });
  }
 

  ngOnInit(): void {
    this.updateOrders();
  }



  async updateOrders() {


    this.service.getOrderList().subscribe((orderData: OrderData[]) => {

      this.orders = orderData;


      //lokales einsortieren in TODO und DONE
      this.orders.forEach((element: OrderData) => {

        if (element.fertig == true) {
          this.ordersDONE.push(element);
        }
        else if (element.fertig == false) {
          this.ordersTODO.push(element);
        }
      })
    })


      this.service.getBridgePizzaZuOrderDataList().subscribe(PizzenBestelltData => {

        this.pizzenBestellt = PizzenBestelltData;
      });


    this.service.getPizzaList().subscribe(PizzenData => {

        this.pizzen = PizzenData;
      });
  }


  refresh(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(["./"], { relativeTo: this.route }).then(() => {

      this.router.onSameUrlNavigation = "ignore";
    })
  }
}
