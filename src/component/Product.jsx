function Product(props) {
  return (
    <div>
      <h3>{props.product.title}</h3>
      <p>{props.product.completed}</p>
    </div>
  );
}

export default Product;
