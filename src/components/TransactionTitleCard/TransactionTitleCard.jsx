import "./transcation_title_card.css";

const TransactionTitleCard = ({transactionCategory, amountTransactionCategory, balanceStatus}) => {
    return (
        <div className="transactiontitlecard">
            <div className="transactiontitlecard-infos">
                <span className="transactiontitlecard-category">
                    Title
                    {transactionCategory}
                </span>
                <span className="transactiontitlecard-amount">
                    $XXXXX,XX
                    {amountTransactionCategory}
                </span>
                <span className="transactiontitlecard-balance">
                    Balance
                    {balanceStatus}
                </span> 
            </div>
        </div>
    )
}

export default TransactionTitleCard