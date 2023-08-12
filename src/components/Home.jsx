import { useAppContext } from '../context/AppContext';
import { OVERVIEW_CARDS_LABEL_MAPPING } from '../constants';

const Home = () => {
  const { inventory } = useAppContext();

  const { totalStock, totalDelivered, lowStock } = inventory.reduce(
    (acc, item) => ({
      totalStock: acc.totalStock + Number(item.stock),
      totalDelivered: acc.totalDelivered + Number(item.delivered),
      lowStock: item.stock <= 10 ? acc.lowStock + 1 : acc.lowStock,
    }),
    {
      totalStock: 0,
      totalDelivered: 0,
      lowStock: 0,
    }
  );

  return (
    <div className="p32 d-flex-c-start gap24">
      {[totalStock, totalDelivered, lowStock].map((item, index) => (
        <div className="card overview-card p16" key={index}>
          <p className={`number mb8 color--${index}`}>{item}</p>
          <p className="label">{OVERVIEW_CARDS_LABEL_MAPPING[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
