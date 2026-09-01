
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from 'src/app/services/product.service';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    const productServiceSpy = jasmine.createSpyObj('ProductService', [
      'getProduct'
    ]);

    productServiceSpy.getProduct.and.returnValue(
      of({
        id: 1,
        sku: 'TEST001',
        name: 'Test Product',
        description: 'Test Description',
        unitPrice: 10,
        imageUrl: 'test.jpg',
        active: true,
        unitsInStock: 10,
        dateCreated: new Date(),
        lastUpdated: new Date()
      })
    );

    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ProductService,
          useValue: productServiceSpy
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => '1',
              has: () => true
            }),
            snapshot: {
              paramMap: {
                get: () => '1',
                has: () => true
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

