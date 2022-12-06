import './transaction_card.css';
import { Link } from 'react-router-dom';

const TransactionCard = ({transactionCategory, amountTransactionCategory, balanceStatus}) => {
    return (
        <div className="transactioncard">
            <div className="transactioncard-infos">
                <span className="transactioncard-infos_bank">{transactionCategory}</span>
                <span className="transactioncard-infos_investment">${amountTransactionCategory}</span>
                <span className="transactioncard-infos_status">{balanceStatus}</span>
            </div>
            <Link to="/transaction">
                <button className="transactioncard-button">View transaction</button>
            </Link>
        </div>
    );
}

export default TransactionCard