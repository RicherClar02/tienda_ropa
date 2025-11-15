// src/app/components/CartItem.jsx

'use client'; 

import React from 'react';
import { useCart } from '../context/CartContext'; // Ajusta la ruta si es necesario

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  // Asumiendo que el campo 'price' es el precio unitario
  const itemTotal = item.price * item.quantity; 
  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

  return (
    <div className="cart-item" style={{ borderBottom: '1px solid #ccc', padding: '15px 0', display: 'flex', gap: '20px', alignItems: 'center' }}>
      {/* Listado: Imagen, Nombre, Precio y Cantidad */}
      <img 
        src={item.image || '/default-product.png'} 
        alt={item.name} 
        style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
      />
      <div className="item-details" style={{ flexGrow: 1 }}>
        <h4>{item.name}</h4>
        <p>Precio Unitario: {formatCurrency(item.price)}</p>
        
        <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          {/* Botones para aumentar o disminuir la cantidad */}
          <button onClick={() => decreaseQuantity(item.id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>-</button>
          <span>Cantidad: {item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>+</button>
        </div>
      </div>
      
      <div className="item-summary" style={{ textAlign: 'right' }}>
        <p style={{ fontWeight: 'bold' }}>Total Ítem: {formatCurrency(itemTotal)}</p>
        {/* Opción para eliminar un producto del carrito */}
        <button 
          className="remove-btn" 
          onClick={() => removeItem(item.id)}
          style={{ background: 'red', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer', marginTop: '10px' }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;