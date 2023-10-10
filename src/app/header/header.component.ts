import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private renderer: Renderer2, private modalService: NgbModal ) { }

  toggleSearchBar() {
    const searchBarIcon = document.querySelector('.search-bar-icon');
    const searchBar = document.getElementById('search-form');

    if (searchBarIcon && searchBar) {
      if (searchBar.classList.contains('show-bar')) {
        this.renderer.removeClass(searchBar, 'show-bar');
        this.renderer.addClass(searchBar, 'hide-bar');
      } else {
        this.renderer.removeClass(searchBar, 'hide-bar');
        this.renderer.addClass(searchBar, 'show-bar');
      }
    }
  }


  openCartModal() {
    const modalRef = this.modalService.open(CartModalComponent, { centered: true });
    modalRef.componentInstance.name = 'World';
  }

}