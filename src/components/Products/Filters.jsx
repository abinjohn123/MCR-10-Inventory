import { useSearchParams } from 'react-router-dom';
import { DEPARTMENT_FILTERS, SORT_KEYS } from '../../constants';

const getParams = (urlObj) => {
  const obj = {};

  for (const [key, value] of urlObj.entries()) {
    obj[key] = value;
  }

  return obj;
};

const Filters = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { department } = getParams(searchParams);

  return (
    <>
      <select
        className="select-input cur-p"
        name="departments"
        id="departments"
        onChange={(e) => {
          setSearchParams({
            ...getParams(searchParams),
            department: e.target.value,
          });
        }}
        defaultValue={Number(department)}
      >
        {Object.values(DEPARTMENT_FILTERS).map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>

      <label htmlFor="low-stock" className="d-flex gap4 cur-p">
        <input
          type="checkbox"
          id="low-stock"
          name="low-stock"
          onChange={(e) =>
            setSearchParams({
              ...getParams(searchParams),
              low_stock: e.target.checked,
            })
          }
        ></input>
        <span>Low stock items</span>
      </label>

      <select
        className="select-input cur-p"
        name="sort"
        id="sort"
        onChange={(e) => {
          setSearchParams({
            ...getParams(searchParams),
            sort: e.target.value,
          });
        }}
      >
        {SORT_KEYS.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filters;
