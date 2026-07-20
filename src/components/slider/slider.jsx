import './slider.css';
import React from 'react';
import { useState, useEffect } from 'react';

const Slider = React.memo(({
    images,
    width,
    height,
    justifySelf,
    borderRadius=false,
    buttonInside=false,
    marginTop
    }
)=> {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(()=> {
        const timer = setInterval(()=> {
            // if (currentSlide==images.length -1){
            //     setCurrentSlide(0);
            // }else{
            //     setCurrentSlide(currentSlide+1)
            // }
            setCurrentSlide((prevSlide) => prevSlide == images.length -1 ? 0 : prevSlide + 1);
        },5000)
        return ()=> clearInterval(timer)
    },[images.length])
    const backgroundImg = {
        backgroundImage:`url(${images[currentSlide].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:`${height?height:'400px'}`,
        backgroundColor:'black',
        overflowX:'hidden',
       
       
    }
    const sliderStyle = {
        width:`${width}`,
        height:`${height}`,
        justifySelf: `${justifySelf}`,
        borderRadius:`${borderRadius==true?'10px':''}`,
        overflowX:'hidden',
        marginTop:`${marginTop}`

    }
    const goToNext =(currentSlide)=> {
        setCurrentSlide(currentSlide)
    }
    return (
        <>
            <section className='slider-container' style={sliderStyle}>
                <div style={backgroundImg}></div>
                <div className='description'>
                    <div className='img-descriptions'>
                        <h2>{images[currentSlide].title}</h2>
                        <p>{images[currentSlide].description}</p>
                    </div>
                    <div className={`carousel-buttons ${buttonInside==true?'carousel-inside':''}`}>
                        {images.map((image,index)=>(
                            <span key={index} onClick={()=> goToNext(index)} className={currentSlide==index?'currentSlide':''}></span>
                        ))}
                    </div>
                </div>
          
            </section>
        </>
    )
})

export default Slider;