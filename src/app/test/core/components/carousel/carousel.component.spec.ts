import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CarouselComponent } from '../../../../core/components/carousel/carousel.component';
import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/interfaces/products';

describe('CarouselComponent test: ', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let productServiceSpy: jasmine.SpyObj<ProductService>;

  const mockProducts: Product[] = [
    { nameProduct: "MFUND",numberProduct: "789654123",balanceProduct: "4000000",detaildProduct: "Ya tienes un 15% de tu objetivo " },
    { nameProduct: "MFUND",numberProduct: "789654123",balanceProduct: "4000000",detaildProduct: "Ya tienes un 15% de tu objetivo " },
    { nameProduct: "MFUND",numberProduct: "789654123",balanceProduct: "4000000",detaildProduct: "Ya tienes un 15% de tu objetivo " },
    { nameProduct: "MFUND",numberProduct: "789654123",balanceProduct: "4000000",detaildProduct: "Ya tienes un 15% de tu objetivo " },

  ];

  beforeEach(async () => {
    productServiceSpy = jasmine.createSpyObj('ProductService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [CarouselComponent],
      providers: [{ provide: ProductService, useValue: productServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty products', () => {
    expect(component.products.length).toBe(0);
  });

  it('should call getProduts and load products', () => {
    productServiceSpy.getAll.and.returnValue(of(mockProducts));
    component.getProduts();
    expect(productServiceSpy.getAll).toHaveBeenCalled();
    expect(component.products.length).toBe(4);
  });

  it('should handle error when getProduts fails', () => {
    spyOn(console, 'error');
    productServiceSpy.getAll.and.returnValue(throwError(() => new Error('Error en API')));
    component.getProduts();
    expect(console.error).toHaveBeenCalled();
  });

  it('should move to next product correctly', () => {
    component.products = mockProducts;
    component.next();
    expect(component.currentIndex).toBe(1);
    component.next();
    expect(component.currentIndex).toBe(2);
    component.next();
    expect(component.currentIndex).toBe(3); // no pasar el limite
  });

  it('should move to previous product correctly', () => {
    component.products = mockProducts;
    component.currentIndex = 2;
    component.prev();
    expect(component.currentIndex).toBe(1);
    component.prev();
    expect(component.currentIndex).toBe(0);
    component.prev();
    expect(component.currentIndex).toBe(0); // > 0
  });

  it('should remove resize event listener on destroy', () => {
    spyOn(window, 'removeEventListener');
    component.ngOnDestroy();
    expect(window.removeEventListener).toHaveBeenCalledWith('resize', jasmine.any(Function));
  });
});
