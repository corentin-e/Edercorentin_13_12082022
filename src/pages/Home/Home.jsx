import '../Home/home.css'
import { HomeCard, PubCard } from '../../components'
import imageBand from '../../assets/images/bank-tree.jpeg'
import iconChat from '../../assets/icons/icon-chat.png'
import iconMoney from '../../assets/icons/icon-money.png'
import iconSecurity from '../../assets/icons/icon-security.png'

const Home = () => {
    return (
        <div className='home-structure'>
            <div className='home-image_frame' style={{backgroundImage: `url(${imageBand})`}}>
                <PubCard/>
            </div>
            <div className='home-cards_area'>
                <HomeCard
                    iconName={iconChat}
                    titleCard='You are our #1 priority'
                    textCard='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
                />
                <HomeCard
                    iconName={iconMoney}
                    titleCard='More savings means higher rates'
                    textCard='The more you save with us, the higher your interest rate will be!'
                />
                <HomeCard
                    iconName={iconSecurity}
                    titleCard='Security you can trust'
                    textCard='We use top of the line encryption to make sure your data and money is always safe.'
                />
            </div>
        </div>
    );
}

export default Home;
