import ProductForm from "../features/products/ProductForm";
import ProductTable from "../features/products/ProductTable";

const Products = () => (
  <div className="row">
    <div className="col-md-3">
      <ProductForm />
    </div>
    <div className="col-md-9">
      <ProductTable />
    </div>
  </div>
);

export default Products;
