import Slider from '../../components/slider/slider';
import './about.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { usePage } from '../../context/pageContext';
import { currentPage } from '../../context/pageContext';
import { sliderImages } from '../../utils/appData';
import { Link } from 'react-router-dom';
import { images } from '../../utils/appData';
import { useWindowWidth } from '../../context/pageContext';
const About = ()=> {
    const navigate = useNavigate();
    const {pageName, setPageName} = usePage();
    const windowWidth = useWindowWidth();

    return (
    <>
        <div className=" container about-page">
            <div className="content">
                    
                <h2 className="block-heading">
                    Young People Driving Global Change
                </h2>
                <p>The Society for Sustainable Transformative Initiative is a 
                    network of 52 Youth-led organisation 
                    united by the belief that 
                    young people can drive change.
                </p>
                <p>Our members are young leaders from 
                    every corner of the globe, addressing diverse issues and united 
                    by our shared belief that young people can drive change.
                </p>
                <Slider images={sliderImages}
                width={windowWidth > 768 ? '60%' : '90%'}
                borderRadius={true}
                justifySelf='center'
                />
            
                <h2 className="block-heading">
                    <a href="">Add </a>
                    your youth civil society organisation or youth leader to our directory.
                </h2>
                <ul className="block-list">
                    <li>Funding opportunities in our 
                        <a href="">
                            <strong>newsletter</strong>
                        </a>
                    </li>
                    <li>Donor Dialogues: connecting youth with funders</li>
                    <li>Networking via 
                        <a href="">
                            <strong>Facebook</strong>
                        </a>, events, and our directory
                    </li>
                    <li>Training and 
                        <strong>
                            <a href="">resources</a> 
                        </strong>for organisations
                    </li>
                    <li>Insights from 
                        <a href="">
                            <strong>youth-led research</strong>
                        </a>
                    </li>
                    <li>Visibility on our 
                        <Link to={'/home'} onClick={()=>setPageName('home')}><strong>map</strong></Link> and 
                        <Link to={'/home'} onClick={()=>setPageName('home')}><strong>directory</strong></Link>
                    </li>
                </ul>

                <h2 className="block-heading">Youth Power Champions</h2>
                <p>Restless Development empowers young leaders to drive global change 
                    through collective action. Our Youth Collective is a network of 5,832 
                    youth-led organisations and youth leaders across 185 countries at the 
                    core of our mission. Youth Power, the collective force of young leaders, 
                    drives change. Each year, we support 250,000+ young leaders with 
                    opportunities, mentorship, and resources through strategic communications 
                    that celebrate their impact.
                </p>
                <p>To amplify this mission, we have onboarded five 
                    <strong>
                        <a href="">
                            Youth Power Champions
                        </a> 
                    </strong>
                    from Africa, Asia, the MENA region, Latin America, and Europe. 
                    These young leaders used the Youth Collective to celebrate and 
                    champion the incredible impact of young people worldwide, ensuring their 
                    voices and actions shaped a more equitable and sustainable future.
                </p>
                <h2 className="block-heading">Why does youth civil society matter?</h2>
                <p>Youth civil society organisations mobilize vast networks of young 
                    people to lead change in their communities. These grassroots networks
                    help deliver the scale of change needed in development. These 
                    organisations represent community needs and bridge the gap between 
                    communities and formal decision-making bodies, such as governments.
                </p>
                <p>Agile and grassroots, youth civil society organisations are typically 
                    based at the heart of communities, closest to the problems and 
                    community-guided solutions. However, youth civil society overall is 
                    merely surviving, not thriving. Challenges include limited access to 
                    funding, lack of coordination, and insufficient power and access to 
                    decision-makers.
                </p>
                <h2 className="block-heading">
                    <a href="/">Read </a> 
                    more about the challenges facing Youth Civil Society and the reasons 
                    we need to ensure it thrives. 
                </h2>
                <p>We document Youth Civil Society Organisations on our map and directory 
                    to create a comprehensive picture of where youth civil society is thriving, 
                    facing challenges, and making a positive impact. The Youth Collective is 
                    co-owned and led by youth civil society organisations from around the world.
                </p>
                <div id="button-block_1a182d91d447cb40f92c20bd7777cd05" className="button-block">
                    <Link to={"/contact"} className='btn btn-primary'>
                        Join the Transformative Society
                    </Link>
                    <div className='bottom-line'></div>
                </div>
                <hr />
                <div className="block-columns is-layout-flex container-core-columns-is-layout-9d6595d7 block-columns-is-layout-flex">
                    <div className="block-column is-layout-flow block-column-is-layout-flow">
                        <h5 className="block-heading">Powered by:</h5>
                        <figure className="block-image size-medium" onClick={()=>{navigate('/home');setPageName(currentPage())}}>
                            <img decoding="async" 
                            src={images.imageLogo} 
                            alt="" className="image-242" />
                        </figure>
                    </div>
                    <div className="block-column is-layout-flow block-column-is-layout-flow"></div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About;