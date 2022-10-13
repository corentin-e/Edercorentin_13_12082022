import "./transaction_page.css";
import { TransactionList } from '../../components';
import TransactionTitleCard from "../../components/TransactionTitleCard/TransactionTitleCard";

const TransactionPage = () => {
    return (
        <div className="transactionpage">
            <TransactionTitleCard/>
            <TransactionList/>
        </div>
    );
}
export default TransactionPage;