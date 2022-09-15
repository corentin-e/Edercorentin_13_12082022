import './transaction_card.css';

const TransactionCard = () => {
    return (
        <div className="transactioncard">
            <div className="transactioncard-infos">
                <span className="transactioncard-infos_bank">Argent Bank Checking (x8349)</span>
                <span className="transactioncard-infos_investment">$2,082.79</span>
                <span className="transactioncard-infos_status">Available Balance</span>
            </div>
            <button className="transactioncard-button">View transaction</button>
        </div>
    );
}

export default TransactionCard