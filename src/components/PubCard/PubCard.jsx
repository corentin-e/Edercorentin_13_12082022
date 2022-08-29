import './pub_card.css';

const PubCard = ({}) => {
    return (
        <div className="pubcard">
            <label className='pubcard-text_bold'>
                No fees. <br/>
                No minimum deposit. <br/>
                High interest rates.
            </label>
            <label className='pubcard-text_light'>
                Open a savings account with Argent Bank today!
            </label>
        </div>
    );
}

export default PubCard