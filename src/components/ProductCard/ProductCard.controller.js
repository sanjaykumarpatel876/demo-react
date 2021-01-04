import React from 'react';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/Cart.actions';

// eslint-disable-next-line react/prop-types
export default function ProductCardController({ product }) {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return <ProductCard product={ product } onAddToCart={ onAddToCart } />;
}
