import { TestBed } from '@angular/core/testing';
import { ProductService } from '../../../core/services/product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../../../core/interfaces/products';
import { environment } from '../../../../environments/environment.dev';


describe('ProductService test: ', () => {

    let service: ProductService;
    let httpMock: HttpTestingController;

    const mockProducts: Product[] = [
        { nameProduct: "MFUND",numberProduct: "789654123",balanceProduct: "4000000",detaildProduct: "Ya tienes un 15% de tu objetivo " },
        { nameProduct: "MFUND",numberProduct: "789654123",balanceProduct: "4000000",detaildProduct: "Ya tienes un 15% de tu objetivo " },
        { nameProduct: "MFUND",numberProduct: "789654123",balanceProduct: "4000000",detaildProduct: "Ya tienes un 15% de tu objetivo " },
        { nameProduct: "MFUND",numberProduct: "789654123",balanceProduct: "4000000",detaildProduct: "Ya tienes un 15% de tu objetivo " },
    
      ];

    beforeEach(async () => {
    
        await TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [ProductService],
        }).compileComponents();

        service = TestBed.inject(ProductService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // solicitudes pendientes no
        
    });

    it('should fetch all products and map response correctly', () => {
    
        service.getAll().subscribe((products) => {
          expect(products.length).toBe(4);
          expect(products).toEqual(mockProducts);
        });
    
        // Simula HTTP
        const req = httpMock.expectOne(environment.api);
        expect(req.request.method).toBe('GET');
    
        // simulada response
        req.flush({ listCard: mockProducts });
      });
      
});