import { useParams } from 'react-router';
import { useAppContext } from '../../context/AppContext';

import { DEPARTMENTS } from '../../constants';

const ProductDetails = () => {
  const { id } = useParams();
  const { inventory } = useAppContext();
  const product = inventory.find((item) => String(item.id) === id);

  const { name, department, description, price, stock, imageUrl, supplier } =
    product;

  return (
    <div className="p32 pdp">
      <h3>{name}</h3>
      <p className="description mb16 ">{description}</p>
      <div className="img-container mb16">
        <img src={imageUrl} alt={name} />
      </div>

      <p className="mb4">
        Department:{' '}
        {DEPARTMENTS.find((entry) => entry.param === department).label}
      </p>
      <p className="mb4">Price: ${price}</p>
      <p className="mb4">Stock: {stock}</p>
      <p className="mb4">Supplier: {supplier}</p>
    </div>
  );
};

export default ProductDetails;
