import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
