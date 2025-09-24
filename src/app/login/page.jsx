'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react' // ¡Faltaba este import!

const Login = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
  }

  const handleRegistroClick = () => {
    router.push('/registro')
  }

  return (
    <div className="login-container">
      {/* Columna con imagen de fondo completa */}
      <div 
        className="login-image"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/1361840527/es/foto/tienda-de-ropa-con-ropa-zapatos-otros-accesorios-personales-y-luces-de-ne%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=oxyI-oL0lNdPt269uwVpPTXy9XGahuYC7Wx7oNPCZIw=)',
        }}
      >
      </div>

      {/* Columna del formulario */}
      <div className="login-form-container">
        <div className="form-wrapper">
          <h1>Iniciar Sesión</h1>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                placeholder="Ingresa tu usuario"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Ingresar
            </button>
          </form>

          <div className="form-footer">
            <div className="forgot-password">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="switch-form">
              <p>¿No tienes cuenta?</p>
              <button onClick={handleRegistroClick} className="switch-button">
                Regístrate aquí
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login