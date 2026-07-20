import './home.css';
import Slider from '../../components/slider/slider';
import { sliderImages } from '../../utils/appData';
import KenyaMap from '../../components/kenyaMap/map';
import ContactModal from '../../components/contactModal/contactModal';
import PostModal from '../../components/latest-post-modal/postModal';
import EventModal from '../../components/eventModal/eventModal';
import { eventsData } from '../../utils/appData';
import { latestPost } from '../../utils/appData';
const Home = ()=> {
    return (
    <>
    <Slider images={sliderImages}
        width='100vw'
        justifySelf='center'
        buttonInside={true}
        />
    
    <div className='hero'>
        <h1>Society For Sustainable Transformative Initiative</h1>
        <div className='recent-post'>
        {latestPost().map((post,index) => (
            <PostModal key={index} {...post}/>
        ))}
        </div>
        <KenyaMap />
    </div>
    <div className='home-events'>
           {eventsData.map((event,index) => (
            <EventModal key={index} {...event}/>
        ))}
    </div>
    <ContactModal 
    textArea={true}
    width={'96%'}/>
    </>
    )
}

export default Home;