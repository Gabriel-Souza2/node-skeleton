import request from "supertest";
import { expect } from "chai";

import app from "../../src/app";

describe("/api/products", () => {
  const route = "/api/products";

  const product = {
    title: "Product Test",
    description: "A product created for a test"
  };

  test("POST / Should creat and return the product", async () => {
    const response = await request(app)
      .post(route)
      .send(product);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("title", product.title);
    expect(response.body).to.have.property("description", product.description);
  });

  test("GET / Should return all products", async () => {
    await request(app)
      .post(route)
      .send(product);

    const response = await request(app).get(route);

    expect(response.status).to.equal(200);
  });

  test("GET / Should return a product if the id is the same", async () => {
    const created = await request(app)
      .post(route)
      .send(product);

    const response = await request(app).get(`${route}/${created.body._id}`);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id", created.body._id);
    expect(response.body).to.have.property("title", product.title);
    expect(response.body).to.have.property("description", product.description);
  });

  test("PUT / Should update a product and return the new values of product", async () => {
    const updateProduct = {
      title: "Product Test Updated",
      description: "A product updated for a test"
    };

    const created = await request(app)
      .post(route)
      .send(product);

    const response = await request(app)
      .put(`${route}/${created.body._id}`)
      .send(updateProduct);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("_id", created.body._id);
    expect(response.body).to.have.property("title", updateProduct.title);
    expect(response.body).to.have.property(
      "description",
      updateProduct.description
    );
  });

  test("DELETE / should delete a product if the id is the same", async () => {
    const created = await request(app)
      .post(route)
      .send(product);

    const response = await request(app).delete(`${route}/${created.body._id}`);

    expect(response.status).to.equal(204);
  });
});
