import { useNavigate } from 'react-router';
import { DEPARTMENTS } from '../constants';

const Departments = () => {
  return (
    <div className="p32 d-flex-c-start gap24">
      {DEPARTMENTS.map((department, index) => (
        <div className="card overview-card p24 cur-p" key={index}>
          <p className="number">{department.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Departments;
