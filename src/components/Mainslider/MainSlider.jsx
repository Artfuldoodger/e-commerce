
import Slider from 'react-slick/lib/slider';
import slide1 from '../../assets/slider-image-1.jpeg'
import slide2 from '../../assets/slider-image-2.jpeg'
import slide3 from '../../assets/slider-image-3.jpeg'

export default function MainSlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      };


    return <>
    
    
   
   <div className="flex py-4">
    <div className="w-3/4">
    <Slider {...settings}> 
    <img src={slide1} className="w-full h-[400px]"></img>
    <img src={slide2} className="w-full h-[400px]"></img>
    <img src={slide3} className="w-full h-[400px]"></img>
    </Slider>
    </div>
    <div className="w-3/4">
    <img src={slide1} className='w-full h-[200px]' />
    <img src={slide2} className='w-full h-[200px]' />
    </div>
   </div>
    

    
    
    </>
    
}