import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import styles from "./Circkle.module.css"
import { useTranslation } from 'react-i18next'

// import required modules
import { Pagination } from "swiper"


const Circkle = () => {
  
	const { t } = useTranslation()

	const [info, setInfo] = useState()
	useEffect(() => {
		if (localStorage.getItem('i18nextLng') !== '') {
			setInfo(localStorage.getItem('i18nextLng'))
		}
	}, [info])
  let circle = [
    {id: 1, Img: "/circle_1.png", text: "Памирский Тракт",},
    {id: 2, Img: "/circle_2.png", text: "Джип Туры",},
    {id: 3, Img: "/circle_3.png", text: "Езда на яках, лошадях и верблюдах",},
    {id: 4, Img: "/circle_4.png", text: "Кыргызстан, Таджикикстан, Казахстан",},
    {id: 5, Img: "/circle_5.png", text: "Фанские Горы",},
  ];
  let circleEng = [
    {id: 1, Img: "/circle_1.png", text: "Pamir Highway",},
    {id: 2, Img: "/circle_2.png", text: "Jeep Tours",},
    {id: 3, Img: "/circle_3.png", text: "Riding yaks, horses and camels",},
    {id: 4, Img: "/circle_4.png", text: "Kyrgyzstan, Tajikistan, Kazakhstan",},
    {id: 5, Img: "/circle_5.png", text: "Fann Mountains",},
  ];

  return (
    <div>
      {info === 'ru' ? (
        <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        {
          circle.map(item => {
            return (
              <div key={item.id} >
              <SwiperSlide >
                <div className={styles.circle__image} >
                  <img src={item.Img} alt="tour photos" />
                  <p>{item.text}</p>
                  uvh,jhjvhj
                </div>
              </SwiperSlide>
              </div>
            )
          })
        }
      </Swiper>
      
      ):(
        <Swiper
    direction={"vertical"}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className={styles.mySwiper}
  >
    {
      circleEng.map(item => {
        return (
          <div key={item.id} >
          <SwiperSlide >
            <div className={styles.circle__image} >
              <img src={item.Img} alt="tour photos" />
              <p>{item.text}</p>
              234567890
            </div>
          </SwiperSlide>
          </div>
        )
      })
    }
  </Swiper>
      )
    }
    </div>
  )
  
}


export default Circkle