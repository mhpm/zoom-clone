'use client';

import { List } from '@/components/List';
import { IProduct } from './products';
import { useProducts } from './useProducts';
const API_URL = 'https://fakestoreapi.com/products';

const ProducstPage = () => {
  const { products, isLoading, editProduct, newProduct } = useProducts(API_URL);

  return (
    <div className="flex justify-center w-[100vw] min-h-[100vh]">
      <div className="text-white w-1/2 my-20">
        <List products={products} editProduct={editProduct}>
          <List.Header className="flex justify-between mb-5">
            <h1>My Title</h1>
            <button
              onClick={newProduct}
              className="p-1 rounded bg-orange-400 w-[100px]"
            >
              Add
            </button>
          </List.Header>
          <List.Body
            isLoading={isLoading}
            products={products}
            editProduct={editProduct}
          />
        </List>
      </div>
    </div>
  );
};

export default ProducstPage;
