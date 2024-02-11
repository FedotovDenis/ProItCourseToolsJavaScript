import Product from './Product'; // Імпортуємо компонент Product

function TaskList(props) {
  const products = props.products;
  const productItems = products.map(product => 
    <Product key={product.id} product={product} />
  );
  return (
    <div>
      <h1>Product</h1>
      {productItems}
    </div>
  );
}

export default TaskList;