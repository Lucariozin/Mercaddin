import { useSession } from 'next-auth/client';
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { ProductOfCart } from '../types/Product';

type CartContextData = {
  products: ProductOfCart[];
  setProducts: Dispatch<SetStateAction<ProductOfCart[]>>;
  selectedProducts: ProductOfCart[];
  toggleSelectedProduct: (stripePriceId: string) => void;
  totalPrice: string;
  addProductOnCart: (productData: ProductOfCart) => boolean;
  numberOfProductsInCart: number;
  numberOfSelectedProductsInCart: number;
  selectAllProducts: () => void;
  unselectAllProducts: () => void;
  incrementProductAmount: (stripePriceId: string) => void;
  decrementProductAmount: (stripePriceId: string) => void;
  setProductAmount: (stripePriceId: string, productAmount: number) => void;
};

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductOfCart[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<ProductOfCart[]>([]);
  const [totalPrice, setTotalPrice] = useState('');

  const numberOfProductsInCart = products.length;
  const numberOfSelectedProductsInCart = selectedProducts.length;

  const [session] = useSession();


  const addProductOnCart = useCallback((productData: ProductOfCart): boolean => {
    let productMustBeAdded = true;

    setProducts((state) => {
      const newProducts: ProductOfCart[] = [...state];

      newProducts.forEach((product) => {
        if (product.stripePriceId === productData.stripePriceId) {
          productMustBeAdded = false;
        }
      });

      if (!productMustBeAdded) return state;

      newProducts.push(productData);

      return newProducts;
    });

    return productMustBeAdded;
  }, []);

  function toggleSelectedProduct(stripePriceId: string) {
    setProducts((state) => {
      const newProducts = state.map((product) => {
        if (stripePriceId === product.stripePriceId) {
          return {
            ...product,
            isSelected: !product.isSelected,
          };
        }
  
        return product;
      });

      return newProducts;
    });
  }

  const selectAllProducts = useCallback(() => {
    setProducts((state) => {
      const newProducts = state.map((product) => {
        return {
          ...product,
          isSelected: true,
        };
      });

      return newProducts;
    });
  }, []);

  const unselectAllProducts = useCallback(() => {
    setProducts((state) => {
      const newProducts = state.map((product) => {
        return {
          ...product,
          isSelected: false,
        };
      });

      return newProducts;
    });
  }, []);

  const incrementProductAmount = useCallback((stripePriceId: string) => {
    const newProducts: ProductOfCart[] = [];

    products.forEach((prod) => {
      if (prod.stripePriceId === stripePriceId) {
        return newProducts.push({
          ...prod,
          amountProducts: prod.amountProducts + 1 > 10 ? prod.amountProducts : prod.amountProducts + 1,
        });
      }

      newProducts.push(prod);
    });

    setProducts(newProducts);
  }, [products]);

  const decrementProductAmount = useCallback((stripePriceId: string) => {
    const newProducts: ProductOfCart[] = [];

    products.forEach((prod) => {
      if (prod.stripePriceId === stripePriceId) {
        return newProducts.push({
          ...prod,
          amountProducts: prod.amountProducts - 1 <= 0 ? prod.amountProducts : prod.amountProducts - 1,
        });
      }

      newProducts.push(prod);
    });

    setProducts(newProducts);
  }, [products]);

  const setProductAmount = useCallback((stripePriceId: string, productAmount: number) => {
    setProducts((state) => {
      const newProducts = state.map((prod) => {
        if (prod.stripePriceId === stripePriceId) {
          return {
            ...prod,
            numberOfProducts: productAmount,
          };
        }

        return prod;
      });

      return newProducts;
    });
  }, []);


  useEffect(() => {
    const newSelectedProducts = products.filter((product) => {
      if (product.isSelected) return product;
    });

    setSelectedProducts(newSelectedProducts);

    async function saveProducts() {
      if (session && products.length > 0) {
        await api.post('/products/set-cart', {
          email: session.user.email, 
          products,
        });
      }
    }

    saveProducts();

  }, [products, session]);

  useEffect(() => {
    if (session) {
      api.post('/products/get-cart', { email: session.user.email }).then((response) => {
        if (response.data.itemsOfCart.length > 0) {
          setProducts(response.data.itemsOfCart);
        }
      });
    }
  }, [session]);

  useEffect(() => {
    const prices = selectedProducts.map((product) => {
      return Number(product.price.split(' ')[1].replace(',', '.')) * product.amountProducts;
    });

    const totalPrice = prices.reduce((ac, price) => {
      return ac += price;
    }, 0);

    setTotalPrice(totalPrice.toLocaleString('pr-br', {
      style: 'currency',
      currency: 'BRL',
    }));

  }, [selectedProducts]);


  return (
    <CartContext.Provider value={{
      products,
      setProducts,
      selectedProducts,
      totalPrice,
      addProductOnCart,
      numberOfProductsInCart,
      numberOfSelectedProductsInCart,
      toggleSelectedProduct,
      selectAllProducts,
      unselectAllProducts,
      incrementProductAmount,
      decrementProductAmount,
      setProductAmount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const cartData = useContext(CartContext);

  return cartData;
};
