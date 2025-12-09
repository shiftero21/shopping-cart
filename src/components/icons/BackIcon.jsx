import styles from "./BackIcon.module.css";

const BackIcon = ({ size = 32, color = "#000000" }) => {
  return (
    <button
    // El SVG (o el icono) recibe la clase de animación
    >
      <svg
        className={""}
        // Usamos el viewBox original (512 512) para que las coordenadas internas funcionen.
        viewBox="0 0 512 512"
        // El tamaño final en la pantalla (ej. 32px x 32px)
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Eliminamos el <defs> y movemos los estilos a camelCase para React/JSX */}
        <g
          data-name="Layer 2"
          id="Layer_2"
        >
          <g
            data-name="E421, Back, buttons, multimedia, play, stop"
            id="E421_Back_buttons_multimedia_play_stop"
          >
            {/* Todas las propiedades de estilo se aplican aquí usando camelCase */}
            <circle
              cx="256"
              cy="256"
              r="246"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
            />
            <line
              x1="352.26"
              x2="170.43"
              y1="256"
              y2="256"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
            />
            <polyline
              points="223.91 202.52 170.44 256 223.91 309.48"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="20"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

export default BackIcon;
