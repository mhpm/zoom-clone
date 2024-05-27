import { useEffect, useState } from 'react';
import { IProduct } from './products';

export const useProducts = (url: string) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const prods = await response.json();
        setProducts(prods);
        setIsLoading(false);
      } catch (error) {}
    };

    getProducts();
  }, []);

  const editProduct = (product: IProduct) => {
    const newName = prompt('Update new name', product.title);

    let updateProds: IProduct[] = products.map((item: IProduct) =>
      item.id === product.id
        ? ({ ...product, title: newName } as IProduct)
        : item
    );

    setProducts(updateProds);
  };

  const newProduct = () => {
    const prod: IProduct = {
      id: +crypto.randomUUID(),
      title: prompt('New Item', 'add title') ?? 'New Item added',
    };

    const tempList = [...products];
    tempList.unshift(prod);

    setProducts(tempList);
  };

  return { products, editProduct, newProduct, isLoading };
};
