import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import ArrowRight from '../../assets/arrowRight.svg'
import ArrowLeft from '../../assets/arrow-left.svg'
interface CarouselProps {
  children: React.ReactNode
  autoplay?: boolean
  space?: number
  pagination?: boolean
  style?: boolean
  arrows?: boolean
}

export function Carousel({
  arrows = false,
  children,
  autoplay = true,
  space = 95,
  pagination = true,
  style = true,
}: CarouselProps) {
  const [arrowLeft, setArrowLeft] = useState(false)
  const [arrowRight, setArrowRight] = useState(true)
  const swiperRef = useRef()

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      gridGap="15px"
      sx={{
        '.swiper-slide': {
          width: style ? '258px !important' : '100px !important',
        },
        '.swiper-pagination-bullet': {
          border: '1px',
          borderColor: 'orange.900',
          backgroundColor: 'white.900',
        },
        '.swiper-pagination-bullet-active': {
          border: '1px',
          borderColor: 'orange.900',
          backgroundColor: 'orange.900',
        },
      }}
    >
      {arrows && (
        <Box
          minW="30px"
          minH="30px"
          className=".arrow-left"
          onClick={() => swiperRef.current?.slidePrev()}
          display={arrowLeft ? 'block' : 'none'}
          cursor="pointer"
          transition="transform  ease-in-out .2s"
          _hover={{
            transform: 'scale(1.1)',
          }}
        >
          <Image src={ArrowLeft} />
        </Box>
      )}

      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onEnded={(swiper) => {
          console.log(swiper)
        }}
        onSlideChange={(slider) => {
          if (slider.activeIndex === 0) {
            setArrowLeft(false)
            setArrowRight(true)
          } else {
            setArrowLeft(true)
          }
          if (slider.isEnd) {
            setArrowRight(false)
          } else {
            setArrowRight(true)
          }
        }}
        onReachEnd={() => {
          setArrowRight(false)
        }}
        centeredSlides={false}
        autoplay={
          autoplay
            ? {
                delay: 1000,
                disableOnInteraction: false,
              }
            : false
        }
        spaceBetween={space}
        slidesPerView="auto"
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {children}
      </Swiper>
      {arrows && (
        <Box
          minW="30px"
          minH="30px"
          cursor="pointer"
          transition="transform  ease-in-out .2s"
          _hover={{
            transform: 'scale(1.1)',
          }}
          className=".arrow-left"
          onClick={() => swiperRef.current?.slideNext()}
          display={arrowRight ? 'block' : 'none'}
        >
          <Image src={ArrowRight} width={50} height={50} />
        </Box>
      )}
    </Box>
  )
}
