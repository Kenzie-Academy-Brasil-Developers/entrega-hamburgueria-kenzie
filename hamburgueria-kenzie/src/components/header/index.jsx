import { SearchInput } from "./searchInput";
import { StyledHeader } from "./styles";

export function Header({ products, setFilteredProducts }) {
  return (
    <StyledHeader>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <SearchInput
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
    </StyledHeader>
  );
}
