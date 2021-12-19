import style from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({title, data}) {
  return (
    <div className={style.container}>
      <div className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2>}
        <ul className={style.statList}>
          {data.map(({id, label, percentage}) => (
            <li className={style.item} key = {id}>
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}</span>
            </li>
          ))}
        </ul>
      </div>     
    </div>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Statistics;