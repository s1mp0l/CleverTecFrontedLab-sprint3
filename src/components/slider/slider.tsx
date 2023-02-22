import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './slider.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';

import img1 from '../../assets/img/book-img-1.png';
import imgPlaceholder from '../../assets/img/book-img-placeholder.svg';

interface ISliderProps {
  isMobile: boolean;
  imagesAmount: number;
}

export const Slider = ({ isMobile, imagesAmount }: ISliderProps) => {
  const swiperNavColor = '--swiper-navigation-color' as string;
  const swiperPagColor = '--swiper-pagination-color' as string;

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <>
      <Swiper
        data-test-id='slide-big'
        loop={true}
        spaceBetween={10}
        navigation={true}
        pagination={isMobile}
        thumbs={isMobile ? undefined : { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className='mySwiper2'
      >
        {[...Array(imagesAmount)].map((i) => (
          <SwiperSlide>
            <img src={img1} alt='slider-item' />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isMobile && (
        <Swiper
          data-test-id='slide-mini'
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={30}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper'
        >
          {[...Array(imagesAmount)].map((i) => (
            <SwiperSlide>
              <img src={img1} alt='slider-item' />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
