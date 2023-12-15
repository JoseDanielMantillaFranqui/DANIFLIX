import { useState, useEffect } from 'react'

export const useScreen = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Función para comprobar si el ancho de pantalla es menor que 480px
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900)
    }

    // Verificar el tamaño de la pantalla inicialmente y cuando cambie
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Limpieza del evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return {
    isMobile
  }
}
