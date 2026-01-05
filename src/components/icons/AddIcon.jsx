const AddICon = ({ size = 32, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      version="1.0"
      encoding="utf-8"
    >
      <circle
        cx="32"
        cy="32"
        r="24"
      />
      <line
        x1="20"
        y1="32"
        x2="44"
        y2="32"
      />
      <line
        x1="32"
        y1="20"
        x2="32"
        y2="44"
      />
    </svg>
  );
};

export default AddICon;
