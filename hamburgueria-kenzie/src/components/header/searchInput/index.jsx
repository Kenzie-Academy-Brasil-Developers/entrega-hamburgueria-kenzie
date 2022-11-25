import { Form } from "./styles";
import { useState, useEffect } from "react";

export function SearchInput({ products, setFilteredProducts }) {
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    const pesquisaTratada = pesquisa
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const filtrado = products.filter(
      ({ name, category }) =>
        name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(pesquisaTratada) ||
        category
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(pesquisaTratada)
    );
    pesquisa === "" || undefined
      ? setFilteredProducts(products)
      : setFilteredProducts(filtrado);
    filtrado.length >= 1
      ? setFilteredProducts(filtrado)
      : setFilteredProducts(products);
  }, [pesquisa]);

  return (
    <Form action="submit" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(text) => setPesquisa(text.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </Form>
  );
}
