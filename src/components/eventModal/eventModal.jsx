import './eventModal.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { currentPage } from '../../context/pageContext';
import { usePage } from '../../context/pageContext';
const EventModal =({
    eventStatus='attended',
    date = new Date().toDateString(),
    content,
    eventName,
    eventLink='/events',
    supportLink,
    county,
    area,
    email
  })=> {
    const {pageName, setPageName} = usePage()
    return (
    <div className="organisation" onClick={() => setPageName(currentPage)}>
		<h2>{eventName} </h2>
        <small>{date}</small>
	    <p>
            {content} 
        </p>
		{eventStatus==="attended" && 
            <p className="website">
                <Link to={eventLink}>
                Review
                </Link>
            </p>
        }
        <p className="email">
			<a href={`mailto:${email}`}>
				Send email	
    		</a>
		</p>
        {eventStatus==="upcoming" && 
            <p className="support-link">
                <a href={supportLink}>
                    Support event			
                </a>
            </p>
        }

		<div className="row">
            <div className="col-sm-4 col-xs-6">
                <p className="label">County(ies)</p>
                <p className="value">
                   {county}			
                </p>
            </div>
			<div className="col-sm-4 col-xs-6">
				<p className="label">Area</p>
				<p className="value">{area} </p>
			</div>
			<div className="col-sm-4 col-xs-12">
				<p className="label">Issues</p>
                {/* {issues.map((e,i)=>{
                    return (
                        <div className="icon">
                            <img src={e.i}
                            alt="Climate and Environment" 
                            title="Climate and Environment"/>
                        </div>
                     )
                })} */}
				<div className="icon">
					<img src="../src/assets/images/pexels-balazsimon-6873614.jpg" 
                    alt="" 
                    title=""/>
				</div>
				<div className="icon">
					<img src="../src/assets/images/pexels-balazsimon-6873614.jpg" 
                    alt="" 
                    title=""/>
				</div>
				<div className="icon">
					<img src="../src/assets/images/pexels-balazsimon-6873614.jpg" 
                    alt="" 
                    title=""/>
				</div>
			</div>
	    </div>
    </div>
);
};

export default EventModal;