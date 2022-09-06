import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GroundComponent } from './ground/ground.component';
import { OrderMainComponent } from './order-main/order-main.component';
import { SelectedPizzaOverviewComponent } from './selected-pizza-overview/selected-pizza-overview.component';


const routes: Routes = [
  { path: 'ground', component: GroundComponent },
  { path: 'order-main', component: OrderMainComponent },
  { path: '', redirectTo: 'order-main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GroundComponent, OrderMainComponent]
