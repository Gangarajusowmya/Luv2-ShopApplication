import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

describe('ProductService', () => {

  let service: ProductService;
  let httpMock: HttpTestingController;

  const baseUrl = 'http://localhost:8080/api/products';

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });



  it('should be created', () => {

    expect(service).toBeTruthy();

  });



  it('should get a product by id', () => {

    const mockProduct: Product = {

      id: 1,
      sku: 'TEST001',
      name: 'Test Product',
      description: 'Test Description',
      unit_price: 10,
      imageUrl: 'test.jpg',
      active: true,
      UnitsInStock: 10,
      dateCreated: new Date(),
      lastUpdated: new Date()

    };


    service.getProduct(1).subscribe(product => {

      expect(product).toEqual(mockProduct);

    });


    const request = httpMock.expectOne(
      `${baseUrl}/1`
    );


    expect(request.request.method).toBe('GET');


    request.flush(mockProduct);

  });



  it('should get products by category', () => {

    const mockProducts: Product[] = [

      {
        id: 1,
        sku: 'TEST001',
        name: 'Coffee Mug',
        description: 'Coffee mug',
        unit_price: 15,
        imageUrl: 'mug.jpg',
        active: true,
        UnitsInStock: 10,
        dateCreated: new Date(),
        lastUpdated: new Date()
      },

      {
        id: 2,
        sku: 'TEST002',
        name: 'Travel Mug',
        description: 'Travel mug',
        unit_price: 20,
        imageUrl: 'travel-mug.jpg',
        active: true,
        UnitsInStock: 5,
        dateCreated: new Date(),
        lastUpdated: new Date()
      }

    ];


    service.getProductList(1).subscribe(products => {

      expect(products).toEqual(mockProducts);

      expect(products.length).toBe(2);

    });


    const request = httpMock.expectOne(
      `${baseUrl}/search/findByCategoryId?id=1`
    );


    expect(request.request.method).toBe('GET');


    request.flush({

      _embedded: {
        products: mockProducts
      }

    });

  });




  it('should search products by keyword', () => {

    const mockProducts: Product[] = [

      {
        id: 1,
        sku: 'TEST001',
        name: 'Coffee Mug',
        description: 'Coffee mug',
        unit_price: 15,
        imageUrl: 'mug.jpg',
        active: true,
        UnitsInStock: 10,
        dateCreated: new Date(),
        lastUpdated: new Date()
      }

    ];


    service.searchProducts('coffee').subscribe(products => {

      expect(products).toEqual(mockProducts);

      expect(products.length).toBe(1);

      expect(products[0].name).toBe('Coffee Mug');

    });


    const request = httpMock.expectOne(
      `${baseUrl}/search/findByNameContaining?name=coffee`
    );


    expect(request.request.method).toBe('GET');


    request.flush({

      _embedded: {
        products: mockProducts
      }

    });

  });




  it('should get paginated products by category', () => {

    const mockResponse = {

      _embedded: {
        products: []
      },

      page: {
        size: 10,
        totalElements: 20,
        totalPages: 2,
        number: 1
      }

    };


    service
      .getProductListPaginate(1, 10, 2)
      .subscribe(response => {

        expect(response).toEqual(mockResponse);

        expect(response.page.size).toBe(10);

        expect(response.page.totalElements).toBe(20);

        expect(response.page.totalPages).toBe(2);

        expect(response.page.number).toBe(1);

      });


    const request = httpMock.expectOne(
      `${baseUrl}/search/findByCategoryId?id=2&page=1&size=10`
    );


    expect(request.request.method).toBe('GET');


    request.flush(mockResponse);

  });



  it('should search products with pagination', () => {

    const mockResponse = {

      _embedded: {
        products: []
      },

      page: {
        size: 5,
        totalElements: 10,
        totalPages: 2,
        number: 1
      }

    };


    service
      .searchProductsPaginate(1, 5, 'shirt')
      .subscribe(response => {

        expect(response).toEqual(mockResponse);

        expect(response.page.size).toBe(5);

        expect(response.page.totalElements).toBe(10);

        expect(response.page.totalPages).toBe(2);

      });


    const request = httpMock.expectOne(
      `${baseUrl}/search/findByNameContaining?name=shirt&page=1&size=5`
    );


    expect(request.request.method).toBe('GET');


    request.flush(mockResponse);

  });


  it('should get product categories', () => {

    const mockCategories: ProductCategory[] = [

      {
        id: 1,
        categoryName: 'Coffee Mugs'
      },

      {
        id: 2,
        categoryName: 'Luggage'
      }

    ];


    service.getProductCategories().subscribe(categories => {

      expect(categories).toEqual(mockCategories);

      expect(categories.length).toBe(2);

      expect(categories[0].categoryName).toBe('Coffee Mugs');

    });


    const request = httpMock.expectOne(
      'http://localhost:8080/api/product-category'
    );


    expect(request.request.method).toBe('GET');


    request.flush({

      _embedded: {
        productCategory: mockCategories
      }

    });

  });

});