import React, { useEffect, useState } from 'react'
import styles from './Tajikistan.module.css'
import Header from '../Header/Header'
import SideBar from '../SideBAr/SideBar'
import Modal from '../modal/Modal'
import Heading from '../Heading/Heading'
import Button from '../Button/ButtonB'
import { useTranslation } from 'react-i18next'
import '../../i18next'


// Import Swiper React components
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const Tajikistan = () => {
    let sliderImg = [
        { id: 1, imgSrc: 'https://i.ibb.co/dWHRvPn/scroll-1.png'},
        { id: 2, imgSrc: 'https://i.ibb.co/j5p9cL6/scroll-2.png'},
        { id: 3, imgSrc: 'https://i.ibb.co/Pmwk9XD/scroll-3.png'},
        { id: 4, imgSrc: 'https://i.ibb.co/2t7740v/scroll-4.png'},
        { id: 5, imgSrc: 'https://i.ibb.co/8NkrD63/scroll-5.png'},
      ];
      let culture = [
        { id: 1, title: 'Культура', text: 'Таджики отмечают все мусульманские религиозные праздники, а также два государственных праздника – День независимости (9 сентября) и День памяти (12 февраля).', imgSrc: 'https://i.ibb.co/WxnXN6c/culture-1.png'},
        { id: 2, title: '', text: 'Таджики свято чтят свои национальные традиции, и передают их из поколения в поколение. До сих пор таджики (особенно в селах) носят национальную одежду. ', imgSrc: 'https://i.ibb.co/RgK6Yj3/culture-2.png'},
        { id: 3, title: '', text: 'Мужчины предпочитают вышитые халаты и головные уборы, а женщины – вышитые платья с брюками и платки на головах. У девушек, согласно традиции, должно быть заплетено 40 косичек.', imgSrc: 'https://i.ibb.co/1znRcJ8/culture-3.png'},
      ];
      let cultureEng = [
        { id: 1, title: 'Culture', text: 'Tajiks celebrate all Muslim religious holidays, as well as two public holidays - Independence Day (September 9) and Memorial Day (February 12). ', imgSrc: 'https://i.ibb.co/WxnXN6c/culture-1.png'},
        { id: 2, title: '', text: 'Tajiks sacredly honor their national traditions and pass them on from generation to generation. Until now, Tajiks (especially in villages) wear national clothes. ', imgSrc: 'https://i.ibb.co/RgK6Yj3/culture-2.png'},
        { id: 3, title: '', text: 'Men prefer embroidered robes and hats, while women prefer embroidered dresses with trousers and headscarves. Girls, according to tradition, should have 40 braids. ', imgSrc: 'https://i.ibb.co/1znRcJ8/culture-3.png'},
      ];
    
    const [modalActive, setModalActive] = useState(false);
	const { t } = useTranslation()
	const [info, setInfo] = useState()
  return (
      <>
    <Header setInfo={setInfo} info={info} />
    <Modal active={modalActive} setActive={setModalActive} />
    <SideBar className='SideBar' />
    <div className={styles.main} >
        <div className={styles.heading_main} >
          <Heading text={t('TJ_Page.TJ_Title')} />
          <div onClick={() => setModalActive(true)} >
            <Button text={t('TJ_Page.TJ_Phone')} />
          </div>
        </div>
      </div>
      <div className={styles.container} >
        <div className={styles.Kyrgyzstan__info} >
          <p> {t('TJ_Page.TJ_Info')} </p>
        </div>
        <div className={styles.slider} >
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
          {
            sliderImg.map(item => {
              return (
                <SwiperSlide key={item.id} >
                  <img src={item.imgSrc} />
                </SwiperSlide>
              );
            })
          }
          </Swiper>
        </div>
        <div className={styles.capital__city} >
          <div className={styles.capital__info} >
          <Heading tag='h2' text={t('TJ_Page.TJ_Capital_Title')} />
          <p> {t('TJ_Page.TJ_Capital_p1')} <br/> {t('TJ_Page.TJ_Capital_p2')} </p>
          </div>
          <div className={styles.df} >
            <img src="https://i.ibb.co/X4v4tg0/capital-cite-1.png" alt='photo' />
            <img src="https://i.ibb.co/80X7ykx/capital-cite-2.png" alt='photo' />
          </div>
        </div>
        <div className={styles.weather__city} >
          <div className={styles.weather__info} >
            <Heading tag='h2' text={t('TJ_Page.TJ_Weather_Title')} />
            <p> {t('TJ_Page.TJ_Weather_p1')} <br/> {t('TJ_Page.TJ_Weather_p2')} <br/> {t('TJ_Page.TJ_Weather_p3')} </p>
          </div>
          
          <div>
            <img src="https://i.ibb.co/HNJh3Tx/climate.png" alt='photo' />
          </div>
        </div>
        <div className={styles.culture__city} >
          {info === 'ru' ? (
            culture.map(item => {
                return (
                <div className={styles.culture} key={item.id}>
                    <div className={styles.df}>
                    <div className={styles.culture__info}>
                        <Heading tag="h2" text={item.title} />
                        <p>{item.text}</p>
                    </div>
                    <div>
                        <img src={item.imgSrc} alt='photo' />
                    </div>
                    </div>
                </div>
                );
            })
          ):(
            cultureEng.map(item => {
                return (
                  <div className={styles.culture} key={item.id}>
                    <div className={styles.df}>
                      <div className={styles.culture__info}>
                        <Heading tag="h2" text={item.title} />
                        <p>{item.text}</p>
                      </div>
                      <div>
                        <img src={item.imgSrc} alt='photo' />
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </div>
        <div className={styles.nationalFood__} >
          <Heading tag='h2' text={t('TJ_Page.TJ_NationalFood_Title')} />
          <div className={styles.df} >
            <p>{t('TJ_Page.TJ_NationalFood_p1')}</p>
            <img src='https://i.ibb.co/556vCyf/kuhnya-1.png' alt='photo' />
          </div>
          <div className={styles.df} >
            <img src='https://i.ibb.co/m9jjbpc/kuhnya-2.png' alt='photo' />
            <p>{t('TJ_Page.TJ_NationalFood_p2')}</p>
          </div>
          <div className={styles.df} >
            <p> {t('TJ_Page.TJ_NationalFood_p3')} </p>
            <img src='https://i.ibb.co/K5RMS44/kuhnya-5.png' alt='photo' />
          </div>
          <div className={styles.df} >
            <img src='https://i.ibb.co/XYq0mYP/kuhnya-6.png' alt='photo' />
            <p> {t('TJ_Page.TJ_NationalFood_p4')} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tajikistan