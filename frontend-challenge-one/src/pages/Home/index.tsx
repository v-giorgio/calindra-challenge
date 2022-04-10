import React, { useEffect, useState } from "react";
import { colors } from "../../assets/theme/theme";
import { MainContainer } from "./styles";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductsList";

interface Product {
  product: string;
}

function Home() {
  const [products, setProducts] = useState<Product>();

  const handleProducts = (data: any) => {
    setProducts(data);
  };

  useEffect(() => {
    // console.log(products);
  }, [products]);

  return (
    <MainContainer style={{ backgroundColor: colors.light }}>
      <Header />
      <Form findProducts={handleProducts} />
      <ProductsList products={products} />
      <Footer />
    </MainContainer>
  );
}

export default Home;
