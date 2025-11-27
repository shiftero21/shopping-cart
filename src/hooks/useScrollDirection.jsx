// src/utils/useScrollDirection.js

import { useState, useEffect } from "react";

const useScrollDirection = () => {
  // 1. Estado inicial: Arriba (up)
  const [scrollDirection, setScrollDirection] = useState("up");

  // 2. Estado para almacenar la posición Y anterior
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // 3. Handler que se ejecuta con cada evento de scroll
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      // La condición clave:
      // Si el desplazamiento actual es mayor que el último (moviéndose hacia abajo),
      // y la posición es lo suficientemente grande (evitar el parpadeo inicial)
      if (scrollY > lastScrollY && scrollY > 100) {
        setScrollDirection("down");
      }
      // Si el desplazamiento actual es menor que el último (moviéndose hacia arriba)
      else if (scrollY < lastScrollY) {
        setScrollDirection("up");
      }

      // 4. Actualizar la última posición de scroll para la próxima comparación
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    // 5. Agregar y limpiar el listener de scroll
    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [lastScrollY]); // Se re-ejecuta cuando 'lastScrollY' cambia (lo cual es en cada scroll)

  return scrollDirection;
};

export default useScrollDirection;
