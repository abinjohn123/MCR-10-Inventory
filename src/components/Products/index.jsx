import { useAppContext } from '../../context/AppContext';

const EachRow = ({ item }) => {
  const { name, id, imageUrl, description, price, stock, supplier } = item;

  return (
    <div className="table-grid table-row p8">
      <div className="img-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="text-ellipsis">
        <p className="item-name">{name}</p>
      </div>
      <div>
        <p className="item-description">{description}</p>
      </div>
      <div>
        <span>${price}</span>
      </div>
      <div>
        <span>{stock}</span>
      </div>
      <div classname="text-ellipsis">
        <p className="text-ellipsis">{supplier}</p>
      </div>
    </div>
  );
};

const ProductListing = () => {
  const { inventory } = useAppContext();

  return (
    <div className="p32 product-listing">
      <div className="header d-flex-c-s">
        <h2>Products</h2>
      </div>
      <div className="table-header table-grid">
        <p>Image</p>
        <p>Name</p>
        <p>Description</p>
        <p>Price</p>
        <p>Stock</p>
        <p>Supplier</p>
      </div>
      <div className="table-body">
        {inventory.map((item) => (
          <EachRow id={item.id} item={item}></EachRow>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
