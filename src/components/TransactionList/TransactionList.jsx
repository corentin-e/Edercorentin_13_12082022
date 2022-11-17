import './transaction_list.css';
import arrow from '../../assets/icons/chevron-down-solid-24.png'
import edit from "../../assets/icons/icon-edit.png";

const TransactionList = () => {

   /*  const detailsTarnsactions = () => {
        
    } */

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
                <tr className='transactionlist-area_details'>
                    <td colspan="5" className='transactionlist-line_details'>
                        <div className='transactionlist-line_detail'>
                            <label>Transaction Type: <span>Electronic</span></label><br/>
                        </div>
                        <div className='transactionlist-line_detail'>
                            <label>Category: <span>Food</span></label><button className='transactionlist-line_edit-button'><img src={edit} alt="edit"/></button><br/>
                        </div>
                        <div className='transactionlist-line_detail'>
                            <label>Notes: </label><button className='transactionlist-line_edit-button'><img src={edit} alt="edit"/></button><br/>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}
export default TransactionList