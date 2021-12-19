import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({items}) {
  console.log('fgdgd',items);
  return (
    <div className={style.container}>
      <table className={style.transactionHistory}>
        <thead>
          <tr >
            <th className={style.title}>Type</th>
            <th className={style.title}>Amount</th>
            <th className={style.title}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map(({id, type, amount, currency}) =>(
              <tr key = {id}>
                <td className={style.row}>{type}</td>
                <td className={style.row}>{amount}</td>
                <td className={style.row}>{currency}</td>
              </tr>
            ))
          }
        </tbody>
      </table>      
    </div>

  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
};

export default TransactionHistory;