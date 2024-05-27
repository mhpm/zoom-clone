import { IProduct } from '@/app/products/products';

export const List = ({
  editProduct,
  children,
}: {
  products: IProduct[];
  editProduct: (product: IProduct) => void;
  children: React.ReactNode;
}) => {
  return <div>{children};</div>;
};

List.Header = function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <h1 className={`list-header ${className}`}>{children}</h1>;
};

List.Body = function Body({
  isLoading,
  products,
  editProduct,
}: {
  isLoading: boolean;
  products: IProduct[];
  editProduct: (e: IProduct) => void;
}) {
  return products.map((p: any) => (
    <>
      {isLoading ? (
        <div className="text-white w-full h-full flex justify-center items-center">
          Is Loading
        </div>
      ) : (
        <div
          key={p.id}
          className="p-2 border rounded-lg mb-1 flex justify-between"
        >
          <div>{p.title}</div>
          <div>
            <button onClick={() => editProduct(p)}>edit</button>
          </div>
        </div>
      )}
    </>
  ));
};
