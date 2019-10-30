import product from "./product";

const prefix = "/api";

export default app => {
  product(app, prefix);
};
