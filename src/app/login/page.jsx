'use client'

import React, { useState } from 'react'


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (formData.username === '' || formData.password === '') {
      alert('Por favor, completa todos los campos');
      return;
    }

    // Aquí iría la lógica de autenticación
    console.log('Datos del login:', formData);
    alert(`Login exitoso! Usuario: ${formData.username}`);
    
    // Limpiar formulario después del login
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Ingresa tu usuario"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;