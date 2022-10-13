import './transaction_list.css';
import arrow from '../../assets/icons/chevron-down-solid-24.png'

const TransactionList = () => {
    return(
        <div className='transactionlist'>
            <table className='transactionlist-array'>
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th className='transactionlist-array_head'>
                            <span>Date</span>
                        </th>
                        <th>
                            <span>Description</span>
                        </th>
                        <th>
                            <span>Amount</span>
                        </th>
                        <th>
                            <span>Balance</span>
                        </th>
                    </tr>
                </thead>
                <tr className='transactionlist-array_line'>
                    <td>
                        <button className='transactionlist-array_line_button'>
                            <img src={arrow} alt=""/>
                        </button>
                    </td>
                    <td>
                        June 20th, 2020
                    </td>
                    <td>
                        Golden Sun Bakery
                    </td>
                    <td>
                        $5.00
                    </td>
                    <td>
                        $2082.79
                    </td>
                </tr>
                <tr>

                </tr>
            </table>
        </div>
    );
}
export default TransactionList