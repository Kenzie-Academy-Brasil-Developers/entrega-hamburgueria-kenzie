import { StyledCard } from "./styles";

export function CartCard({ prod, removeItem, index }) {
  const { name, category, price, img } = prod;

  return (
    <StyledCard>
      <div className="item-wrapper">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-infos">
          <h3>{name}</h3>
          <p>{category}</p>
          {prod.quantity > 1 ? <span>{prod.quantity}</span> : false}
        </div>
      </div>
      <button className="remove-item" onClick={() => removeItem(index)}>
        Remover
      </button>
    </StyledCard>
  );
}
