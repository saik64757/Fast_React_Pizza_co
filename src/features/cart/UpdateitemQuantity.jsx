import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export const UpdateitemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};
