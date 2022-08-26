import '../Home/home.css'
import { Layout } from '../../components/index.js'
import imageBand from '../../assets/images/bank-tree.jpeg'

const Home = () => {
    return (
        <Layout>
            <div className='home-structure'>
                <div className='home-image_frame'>
                    <img src={imageBand} alt="Tree" className='home-image'/>
                    <div className='home-image_frame'>
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
