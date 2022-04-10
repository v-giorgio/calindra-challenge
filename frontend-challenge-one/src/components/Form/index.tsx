import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { colors } from "../../assets/theme/theme";
import { Button, InputLabel, Input, Alert } from "@mui/material";
import { SectionTitle, MainSection, MainForm, Styles } from "./styles";

import axios from "axios";

type FormData = {
  product: string;
};

function Form({ findProducts }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [alert, setAlert] = useState<any>({ status: false, message: "" });
  const [products, setProducts] = useState<any>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setAlert({ status: false, message: "" });

    const product = data.product.toLowerCase();
    await axios
      .get(
        `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${product}&source=nanook`
      )
      .then((res: any) => {
        // console.log(res.data);
        setProducts(res.data.products);
      })
      .catch((err: any) => {
        // console.log(err.response.data);
        setProducts({});
        setAlert({ status: true, message: err.response.data });
      });
  };

  useEffect(() => {
    // console.log(products);
    findProducts(products);
  }, [products]);

  return (
    <MainSection>
      <SectionTitle style={{ color: colors.primary }}>
        Encontrar produto
      </SectionTitle>
      <MainForm onSubmit={handleSubmit(onSubmit)}>
        <InputLabel style={Styles.inputLabel}>Produto: </InputLabel>
        <Controller
          name="product"
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              size="medium"
              placeholder="PC Gamer"
              style={Styles.input}
              disableUnderline={true}
              inputProps={{ style: { width: "-webkit-fill-available" } }}
            />
          )}
        />
        {errors?.product && (
          <span style={Styles.requireSpan}>{errors?.product.message}</span>
        )}
        {alert.status && (
          <Alert style={Styles.alert} severity="error">
            {alert.message}
          </Alert>
        )}
        <Button sx={Styles.button} type="submit">
          Buscar
        </Button>
      </MainForm>
    </MainSection>
  );
}

export default Form;
