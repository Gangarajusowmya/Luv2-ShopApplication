import { Product } from './product';

describe('Product', () => {

  it('should create an instance', () => {
    const product = new Product(
      1,
      'SKU001',
      'Test Product',
      'Test product description',
      49.99,
      'test.jpg',
      true,
      10,
      new Date(),
      new Date()
    );

    expect(product).toBeTruthy();
  });

});