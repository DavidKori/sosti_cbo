import './event.css';
import EventModal from '../../components/eventModal/eventModal';
import { eventsData } from '../../utils/appData';
const Events = ()=> {
  
    return (
    <section className="events-page">
       {eventsData.map((event,index) => (
            <EventModal key={index} {...event}/>
        ))}
      
    </section>
    )
}

export default Events;