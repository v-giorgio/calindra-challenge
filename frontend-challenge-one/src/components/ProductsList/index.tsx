import React, { useEffect, useState } from "react";
import { colors } from "../../assets/theme/theme";
import {
  MainSection,
  ResultParagraph,
  ResultSection,
  ResultTitle,
} from "./styles";

function ProductsList({ products }: any) {
  const [result, setResult] = useState(false);

  useEffect(() => {
    //console.log(products);
    if (products) {
      setResult(true);
    } else {
      setResult(false);
    }
  }, [products]);

  return (
    <>
      {result && (
        <MainSection style={{ color: colors.primary }}>
          {products.map((product: any) => {
            return (
              <ResultSection>
                <ResultTitle>ID do produto: {product.id}</ResultTitle>
                <ResultParagraph>
                  <b>Descrição:</b>
                  <br />
                  <br />
                  {product.name}
                </ResultParagraph>
                <ResultParagraph>
                  <b>Quantidade de visitas:</b> {product._meta.visitsClickCount}
                </ResultParagraph>
                <ResultParagraph>
                  <b>Avaliação média:</b> {product._meta.score.toFixed(2)}
                </ResultParagraph>
              </ResultSection>
            );
          })}
        </MainSection>
      )}
    </>
  );
}

export default ProductsList;
