import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit {

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  checkout() {
    // Agrega la lógica para realizar la compra
  }
}



