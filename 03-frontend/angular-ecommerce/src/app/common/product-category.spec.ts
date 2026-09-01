import { ProductCategory } from './product-category';

describe('ProductCategory', () => {

  it('should create an instance', () => {
    const productCategory = new ProductCategory(1, 'Books');

    expect(productCategory).toBeTruthy();
  });

});