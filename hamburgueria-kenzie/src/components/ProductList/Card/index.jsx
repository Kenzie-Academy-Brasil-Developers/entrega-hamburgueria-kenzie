import { StyledCard } from "./styles";

export function ProductCard({ img, name, category, price, addToCart }) {
  return (
    <StyledCard>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-infos">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => addToCart({ img, name, category, price })}>
          Adicionar
        </button>
      </div>
    </StyledCard>
  );
}
