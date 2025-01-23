import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{

  products: Product[]=[]; 

  currentIndex: number = 0;
  visibleCards: number = 3;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.updateVisibleCards();
    window.addEventListener('resize', this.updateVisibleCards.bind(this));

    this.getProduts()
  }

  getProduts(): void {
    this.productService.getAll().subscribe({
      next: (data:Product[]) => {
        this.products = data;
        console.log('data', this.products)
      },
      error: (e) => console.error(e)
    });
  }

  next() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  updateVisibleCards(): void {
    const width = window.innerWidth;
    if (width >= 1200) {
      this.visibleCards = 3;
    } else if (width >= 768) {
      this.visibleCards = 2;
    } else {
      this.visibleCards = 1;
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateVisibleCards.bind(this));
  }

}
