import AnimateCounter from "../elements/AnimateCounter";

const Number = ({ value }) => (
  <AnimateCounter
    className='card__number'
    total={value}
  />
);

const DashboardCard = ({ title, value, isMultiple = false, unit = '' }) => (
  <div className='card__item'>
    <span className='card__title'>{title}</span>
    <div>
      {isMultiple ? (
        value.map((val, index) => (
          <>
          <Number key={index} value={val} /> {index !== value.length - 1 && <span>-</span>}
          </>
        ))
      ) : (
        <Number value={value} />
      )}
      {unit && <span className='card__unit'> {unit}</span>}
    </div>
  </div>
);

export default DashboardCard;
