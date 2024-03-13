import AnimateCounter from "../../elements/AnimateCounter";

const OverviewItem = ({ label, value, unit = '' }) => (
  <div className='overview__item'>
    <span className='overview__title'>{label}</span>
    <div>
      <AnimateCounter
        className='overview__item-number'
        total={value}
      />
      {unit && <span className='overview__unit'> {unit}</span>}
    </div>
  </div>
);

export default OverviewItem;
