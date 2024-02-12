import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Pancake",
    },
    {
      url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Noodles",
    },
    {
      url: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Fish salad",
    },
    {
      url: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Fried Potatos",
    },
    {
      url: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Pasta",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((index) => {
        return index === 0 ? slides.length-1 : index-1;
    })
  }

  const nextSlide = () => {
    setCurrentIndex((index) => {
        return index === slides.length-1 ? 0 : index+1;
    })
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return <div className='max-w-[1400px] h-[580px] m-auto py-16 px-4 relative group'>
     <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
     style={{backgroundImage : `url(${slides[currentIndex].url})`}}>
     </div>
     {/* left arrow */}
     <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
     </div>
     {/* right arrow */}
     <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
     </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide,index) => 
                <div className='text-2xl cursor-pointer' key={index} onClick={() => goToSlide(index)} >       
                    <RxDotFilled  />
                </div>
            )}
        </div>



  </div>;
};

export default ImageSlider;
