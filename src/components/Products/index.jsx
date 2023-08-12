import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

import Filters from './Filters';
import { DEPARTMENT_FILTERS } from '../../constants';

const getParams = (urlObj) => {
  const obj = {};
  for (const [key, value] of urlObj.entries()) {
    obj[key] = value;
  }
  return obj;
};

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
      <div className="text-ellipsis">
        <p className="text-ellipsis">{supplier}</p>
      </div>
    </div>
  );
};

const ProductListing = () => {
  const { inventory } = useAppContext();
  let [searchParams, _] = useSearchParams();

  const filterParams = getParams(searchParams);

  console.log(filterParams);

  const getFilteredList = () => {
    const departmentFilter = filterParams.department
      ? Number(filterParams.department)
      : DEPARTMENT_FILTERS.ALL.value;
    const isLowStockFilter = filterParams.low_stock
      ? filterParams.low_stock === 'true'
      : false;
    const sortKey = filterParams.sort ? Number(filterParams.sort) : 0;

    return inventory
      .filter((item) => {
        let flag = true;
        if (
          departmentFilter > DEPARTMENT_FILTERS.ALL.value &&
          item.department !== departmentFilter
        )
          flag = false;

        if (isLowStockFilter && item.stock > 10) flag = false;

        return flag;
      })
      .sort((a, b) => {
        if (!sortKey) return 0;

        if (sortKey === 1) return a.name < b.name ? -1 : 1;

        if (sortKey === 2) return a.price - b.price;

        if (sortKey === 3) return a.stock - b.stock;
      });
  };

  return (
    <div className="p32 product-listing">
      <div className="header d-flex-c-s mb16">
        <h2>Products</h2>
        <Filters />
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
        {getFilteredList().map((item) => (
          <EachRow key={item.id} item={item}></EachRow>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
