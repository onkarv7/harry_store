import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";

const ProductForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("id")}
        placeholder="ID"
        className="form-control mb-4"
      />
      <input
        {...register("name")}
        placeholder="Product Name"
        className="form-control mb-4"
      />
      <input
        {...register("price")}
        placeholder="Price"
        type="number"
        className="form-control mb-4"
      />
      <textarea
        {...register("description")}
        placeholder="Description"
        className="form-control mb-4"
      />
      <input
        {...register("image")}
        placeholder="Image URL"
        className="form-control mb-4"
      />
      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
