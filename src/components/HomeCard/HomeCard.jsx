import './home_card.css';

const HomeCard = ({iconName, textCard, titleCard}) => {
    return (
        <div className="homecard">
            <img src={iconName} alt="icon card" className='homecard-icon'/>
            <label className='homecard-title'>{titleCard}</label>
            <label className='homecard-text'>{textCard}</label>
        </div>
    );
}

export default HomeCard