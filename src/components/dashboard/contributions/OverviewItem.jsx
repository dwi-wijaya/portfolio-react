import AnimateCounter from "../../elements/AnimateCounter";

const OverviewItem = ({ label, value, unit = '' }) => (
  <div className='overview__item'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <div>
      <AnimateCounter
        className='overview__item-number'
        total={value}
      />
      {unit && <span className=''> {unit}</span>}
    </div>
  </div>
);

export default OverviewItem;
