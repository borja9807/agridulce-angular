import { Component, ElementRef, ViewChild } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Inventory {
  [productId: number]: {
    [size: string]: number;
  };
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  inventory: Inventory = {
    1: {
      S: 5,
      M: 15,
      L: 20,
      XL: 5
    },
    2: {
      S: 5,
      M: 7,
      L: 10,
      XL: 3
    }
  };

  @ViewChild('cartContainer', { static: true }) cartContainer: ElementRef | undefined;
  @ViewChild('cartButton', { static: true }) cartButton: ElementRef | undefined;
  @ViewChild('closeCartButton', { static: true }) closeCartButton: ElementRef | undefined;
  @ViewChild('cartItemsList', { static: true }) cartItemsList: ElementRef | undefined;
  @ViewChild('cartTotal', { static: true }) cartTotal: ElementRef | undefined;

  cart: Product[] = [];

  toggleCart() {
    if (this.cartContainer) {
      this.cartContainer.nativeElement.classList.toggle('cart-visible');
      this.cartContainer.nativeElement.classList.toggle('cart-hidden');
    }
  }

  addToCart(product: Product) {
    const productInCart = this.cart.find((p) => p.id === product.id);

    if (productInCart) {
      alert('El producto ya está en el carrito.');
    } else {
      const selectedSizeElement = document.querySelector(`#product-${product.id} #size-${product.id}`) as HTMLSelectElement;
      const selectedSize = selectedSizeElement.value;
      const availableQuantity = this.inventory[product.id][selectedSize];

      if (availableQuantity > 0) {
        if (this.cartItemsList) {
          const listItem = document.createElement('li');
          listItem.textContent = `${product.name} - Talla: ${selectedSize}`;
          listItem.id = `cart-item-${product.id}`;
          if (this.cartItemsList.nativeElement) {
            this.cartItemsList.nativeElement.appendChild(listItem);
          }
          alert('Producto agregado al carrito.');

          // Actualiza el inventario después de agregar al carrito
          this.inventory[product.id][selectedSize] -= 1;
          const availableQuantityElement = document.getElementById(`available-quantity-${product.id}`);
          if (availableQuantityElement) {
            availableQuantityElement.textContent = `Cantidad Disponible: ${this.inventory[product.id][selectedSize]}`;
          }

          // Agrega el producto al carrito
          this.cart.push(product);
          this.renderCart();
        }
      } else {
        alert('No hay suficiente inventario disponible.');
      }
    }
  }

  renderCart() {
    if (this.cartItemsList && this.cartTotal) {
      if (this.cartItemsList.nativeElement) {
        this.cartItemsList.nativeElement.innerHTML = '';
      }
      let total = 0;

      this.cart.forEach((product) => {
        total += product.price;
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        if (this.cartItemsList && this.cartItemsList.nativeElement) {
          this.cartItemsList.nativeElement.appendChild(cartItem);
        }        
      });

      if (this.cartTotal.nativeElement) {
        this.cartTotal.nativeElement.textContent = '$' + total.toFixed(2);
      }
    }
  }

  constructor() {
    // Ejemplo de agregar productos al carrito
    const product1: Product = { id: 1, name: 'Product-1', price: 50.0 };
    const product2: Product = { id: 2, name: 'Product-2', price: 40.0 };

    this.addToCart(product1);
    this.addToCart(product2);

    // Agrega event listeners para mostrar/ocultar el carrito
    if (this.cartButton && this.closeCartButton) {
      this.cartButton.nativeElement.addEventListener('click', () => {
        this.toggleCart();
      });

      this.closeCartButton.nativeElement.addEventListener('click', () => {
        this.toggleCart();
      });
    }
  }
}
