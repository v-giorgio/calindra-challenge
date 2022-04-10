const request = require("supertest");
const app = require("../src/index");

describe("Testar funcionalidades de API", () => {
  it("Deve conseguir retornar as localizações na rota `/location` corretamente", async () => {
    const locations = {
      addresses: [
        {
          street: "Av. Rio Branco",
          number: "1",
          neighborhood: "Centro",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "20090003",
        },
        {
          street: "Praça Mal. Âncora",
          number: "122",
          neighborhood: "Centro",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "20021200",
        },
        {
          street: "Rua 19 de Fevereiro",
          number: "34",
          neighborhood: "Botafogo",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "22280030",
        },
      ],
    };

    const response = await request(app).post("/location").send(locations);

    expect(response.status).toBe(200);

    expect(response._body.distance_0_and_1.distance).toBe(0.011921952761606592);
    expect(response._body.distance_0_and_2.distance).toBe(0.05389910936592824);
    expect(response._body.distance_1_and_2.distance).toBe(0.04988261769725114);
  });

  it("Deve conseguir retornar as localizações na rota `/location_nearby` corretamente", async () => {
    const locationsNearby = {
      addresses: [
        {
          street: "Av. Rio Branco",
          number: "1",
          neighborhood: "Centro",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "20090003",
        },
        {
          street: "Praça Mal. Âncora",
          number: "122",
          neighborhood: "Centro",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "20021200",
        },
        {
          street: "Rua 19 de Fevereiro",
          number: "34",
          neighborhood: "Botafogo",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "22280030",
        },
      ],
      current_location: {
        street: "Rua 19 de Fevereiro",
        number: "34",
        neighborhood: "Botafogo",
        city: "Rio de Janeiro",
        state: "RJ",
        zipcode: "22280030",
      },
    };

    const response = await request(app)
      .post("/location_nearby")
      .send(locationsNearby);

    expect(response.status).toBe(200);

    expect(response._body.distances_to_current[0].distance_to_current).toBe(
      0.05389910936592824
    );
    expect(response._body.distances_to_current[1].distance_to_current).toBe(
      0.04988261769725114
    );
    expect(response._body.distances_to_current[2].distance_to_current).toBe(0);

    expect(response._body.closest_location.distance).toBe(0);
    expect(response._body.furthest_location.distance).toBe(0.05389910936592824);
  });

  it("Deve retornar um erro se houverem atributos faltando na rota `/location`", async () => {
    const locations = {
      addresses: [
        {
          street: "Av. Rio Branco",
          number: "1",
          neighborhood: "Centro",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "20090003",
        },
        {
          street: "Praça Mal. Âncora",
          number: "122",
          neighborhood: "Centro",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "20021200",
        },
        {
          street: "Rua 19 de Fevereiro",
          number: "34",
        },
      ],
    };

    const response = await request(app).post("/location").send(locations);

    expect(response.status).toBe(400);
  });

  it("Deve retornar um erro se houverem atributos faltando na rota `/location_nearby`", async () => {
    const locationsNearby = {
      addresses: [
        {
          street: "Av. Rio Branco",
          number: "1",
          neighborhood: "Centro",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "20090003",
        },
        {
          street: "Praça Mal. Âncora",
          number: "122",
          neighborhood: "Centro",
          city: "Rio de Janeiro",
          state: "RJ",
          zipcode: "20021200",
        },
        {
          street: "Rua 19 de Fevereiro",
          number: "34",
        },
      ],
    };

    const response = await request(app).post("/location").send(locationsNearby);

    expect(response.status).toBe(400);
  });
});
