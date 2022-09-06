import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BridgePizzaOrderData } from './models/bridge-pizza-order-data';
import { OrderData } from './models/order-data';
import { Pizza } from './models/pizza';
import { SelectedPizzaOverviewComponent } from './selected-pizza-overview/selected-pizza-overview.component';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  readonly URL = "https://localhost:7077/";
  Cart: Pizza[] = [];
  Summe: number = 0.0;

  
  constructor(private http: HttpClient) { }
  
  //alle Orders bei Michal
  getOrderList(): Observable<OrderData[]> {
    return this.http.get<OrderData[]>(this.URL + 'api/OrderDatas');
  }

  addOrderData(data: OrderData): Observable<OrderData> {
    console.log(data);
    return this.http.post<OrderData>(this.URL + 'api/OrderDatas', data);
  }

  addBridgePizzaZuOrderData(data: BridgePizzaOrderData): Observable<BridgePizzaOrderData> {
    console.log(data);
    return this.http.post<BridgePizzaOrderData>(this.URL + 'api/BridgePizzaZuOrderDatas', data);
  }

  getBridgePizzaZuOrderDataList(): Observable<BridgePizzaOrderData[]> {
    return this.http.get<BridgePizzaOrderData[]>(this.URL + 'api/BridgePizzaZuOrderDatas');
  }


  //Pizzen auf Ordermain
  getPizzaList(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.URL + 'api/Pizzas'); 
  }

  //Order auf Done setzen
  updateOrderData(id: number | string, data: OrderData) {
    return this.http.put(this.URL + `api/OrderDatas/${id}`, data);
  }





  //Frontend Funktionen
  addPizzaToCart(pizza: Pizza) {
    this.Cart.push(pizza);
  }

  getCart(): Pizza[] {
    return this.Cart;
  }


  pwCheck(pw: string | null) {
    //PW Check Backend
  }


  //Summe Accessors
  setSumme(sum: number) {
    //runden
    this.Summe = sum;
  }

  getSumme(): number{
  return this.Summe;  
  }
}
