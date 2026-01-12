import AddICon from "../../../components/icons/AddIcon";
import RemoveIcon from "../../../components/icons/RemoveIcon";

const QuantitySelector = ({ quantity, onAdd, onRemove }) => {
  return (
    <div className="quantity-selector">
      <button
        onClick={onRemove}
        disabled={quantity === 0}
      >
        <RemoveIcon />
      </button>
      <button onClick={onAdd}>
        <AddICon />
      </button>
    </div>
  );
};

export default QuantitySelector;
