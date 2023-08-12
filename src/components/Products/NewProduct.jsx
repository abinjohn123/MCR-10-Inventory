import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router';

import { useAppContext } from '../../context/AppContext';
import { DEPARTMENT_FILTERS } from '../../constants';

const PAYLOAD_MAPPING = [
  'department',
  'name',
  'description',
  'price',
  'stock',
  'sku',
  'supplier',
  'delivered',
  'imageUrl',
];

const NewProduct = () => {
  const { inventory, setInventory } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: uuid(),
    };

    PAYLOAD_MAPPING.forEach(
      (item, index) => (payload[item] = e.target[index].value)
    );

    setInventory([...inventory, payload]);
    navigate('/products');
  };
  return (
    <div className="p32">
      <h2 className="mb24">Add new product</h2>

      <form className="new-product-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <span className="label">Department</span>
          <select
            className="form-input select-input cur-p"
            name="departments"
            id="departments"
            required
          >
            {Object.values(DEPARTMENT_FILTERS)
              .filter((item) => item.value !== DEPARTMENT_FILTERS.ALL.value)
              .map((item, index) => (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              ))}
          </select>
        </div>

        <div className="form-row">
          <label className="label">Name</label>
          <input className="form-input" type="text" required />
        </div>

        <div className="form-row">
          <label className="label">Description</label>
          <textarea rows="5" className="form-input --textarea"></textarea>
        </div>

        <div className="form-row">
          <label className="label">Price</label>
          <input
            className="form-input"
            type="number"
            required
            defaultValue="0"
          />
        </div>

        <div className="form-row">
          <label className="label">Stock</label>
          <input
            className="form-input"
            type="number"
            required
            defaultValue="0"
          />
        </div>

        <div className="form-row">
          <label className="label">SKU</label>
          <input className="form-input" type="text" />
        </div>

        <div className="form-row">
          <label className="label">Supplier</label>
          <input className="form-input" type="text" required />
        </div>

        <div className="form-row">
          <label className="label">Delivered</label>
          <input
            className="form-input"
            type="number"
            required
            defaultValue="0"
          />
        </div>

        <div className="form-row">
          <label className="label">Image URL</label>
          <input className="form-input" type="text" />
        </div>

        <button className="btn btn-submit p16" type="submit">
          Add product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
