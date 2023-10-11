import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CartService]
})
export class HeaderComponent {
  isSearchBarVisible: boolean = false;

  constructor(private modalService: NgbModal, public cartService: CartService) { }

  toggleSearchBar() {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }

  toggleCart() {
    const modalRef = this.modalService.open(CartComponent, { centered: true });
  }

  get cartTotal() {
    return this.cartService.cartTotal;
  }
}
