import ProductController from "../controllers/ProductController";

export default (app, prefix) => {
  const url = `${prefix}/products`;
  app.get(url, ProductController.index);
  app.post(url, ProductController.store);
  app.get(`${url}/:id`, ProductController.show);
  app.put(`${url}/:id`, ProductController.update);
  app.delete(`${url}/:id`, ProductController.destroy);
};
