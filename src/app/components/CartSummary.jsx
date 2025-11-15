// src/app/components/CartSummary.jsx

'use client'; 

import React from 'react';
import { useCart } from '../context/CartContext'; // Ajusta la ruta si es necesario

const TAX_RATE = 0.16; // Impuestos del 16%

const CartSummary = () => {
  const { cartItems } = useCart();

  // Cálculo del Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Cálculo de Impuestos
  const taxes = subtotal * TAX_RATE;

  // Cálculo del Total a pagar
  const total = subtotal + taxes;

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

  return (
    <div className="cart-summary" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3>Resumen del Pedido</h3>
      
      <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
        <span>Subtotal:</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      
      <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
        <span>Impuestos ({TAX_RATE * 100}%):</span>
        <span>{formatCurrency(taxes)}</span>
      </div>
      
      <hr style={{ margin: '15px 0' }} />
      
      <div className="summary-row total" style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', fontSize: '1.2em' }}>
        <strong>Total a pagar:</strong>
        <strong>{formatCurrency(total)}</strong>
      </div>

      {/* Botón para proceder al pago o finalizar la compra */}
      <button 
        className="checkout-btn" 
        disabled={cartItems.length === 0}
        style={{ width: '100%', padding: '15px', fontSize: '1.1em', background: cartItems.length > 0 ? 'green' : '#ccc', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Proceder al Pago
      </button>
    </div>
  );
};

export default CartSummary;