/*
ProductService:
Communicates between Angular frontend and Spring Boot backend.

Flow:
Angular Component
      ↓
ProductService (HttpClient)
      ↓
Spring Boot REST API
      ↓
MySQL Database

Backend returns product data as JSON.
*/

/*
@Injectable:
Allows Angular to inject this service into components.
providedIn: 'root' creates a single shared service instance.
*/




import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../common/product';
import { map } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';  

 // Inject HttpClient to make HTTP requests
  constructor(private httpClient: HttpClient) { }
 /*
  Fetch products from backend.

  Backend response:
  {
    "_embedded": {
       "products": []
    }
  }

  map() extracts only products array.
  Returns Observable<Product[]>
  */
  //getProductList(): Observable<Product[]> {
  getProductList(theCategoryId: number): Observable<Product[]> {

    
    
    //@TODO need to build URL based on category id ..will come back to this ! for the spring boot app
    // I need to build the Url based on the category Id spring data rest automatically exposes endpoint like http://localhost:8080/api/products/search/findByCategoryId?i=1 or 2 or 3 or 4  its because we have images imported in assests of four categories those are coffee mugs luggage bags liek that
   // const searchUrl = '${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}';
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
     return this.getProducts(searchUrl);
  }

  searchProducts(theKeyword: string): Observable<Product[]>
  {
    //i need to build the url based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getProducts(searchUrl);
    
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)


    );
  }

  getProductCategories(): Observable<ProductCategory[]> {
  return this.httpClient.get<any>(
    'http://localhost:8080/api/product-category'
  ).pipe(
    map(response => response._embedded.productCategory)
  );
}
  
}

/*
Interface represents Spring Data REST JSON response structure.
*/
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}

interface GetResponseProductCategory{
  _embedded: {
    productCategory: ProductCategory[];
  }
}
