import React, { useEffect, useState } from 'react'
import styles from './Kyrgyzstan.module.css'
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

const Kyrgyzstan = () => {
    let sliderImg = [
        { id: 1, imgSrc: 'https://i.ibb.co/dWHRvPn/scroll-1.png'},
        { id: 2, imgSrc: 'https://i.ibb.co/j5p9cL6/scroll-2.png'},
        { id: 3, imgSrc: 'https://i.ibb.co/Pmwk9XD/scroll-3.png'},
        { id: 4, imgSrc: 'https://i.ibb.co/2t7740v/scroll-4.png'},
        { id: 5, imgSrc: 'https://i.ibb.co/8NkrD63/scroll-5.png'},
      ];
      let culture = [
        { id: 1, text: 'Культура  Кыргызстана является традиционной для кочевников. На нее существенное влияние оказал ислам, т.к. киргизы – мусульмане. До сих пор киргизы сохраняют свои старинные обычаи, особенно в сельской местности.', imgSrc: 'https://i.ibb.co/F52ks9S/kultura-1.png'},
        { id: 2, text2: 'Чтобы по-настоящему узнать кыргызскую культуру, туристам мы рекомендуем побывать летом в джайлоо .Так в  Кыргызстане называют высокогорное пастбище, оно расположено на высоте 2500-3000 метров над уровнем моря).', imgSrc2: 'https://i.ibb.co/wycQJwW/kultura-2.png'},
        { id: 3, text3: 'Кыргызы отмечают мусульманские праздники - Наврус, Эйд Аль-Фитр, Ид аль-Адха. Все эти и другие праздники сопровождаются традиционными киргизскими играми, музыкальными, танцевальными и театральными представлениями.', imgSrc3: 'https://i.ibb.co/3pkv6cj/kultura-3.png'},
      ];
      
      let cultureEng = [
        { id: 1, text: 'The culture of Kyrgyzstan is traditional for nomads. Islam had a significant influence on it, because. Kirghiz are Muslims. Until now, the Kyrgyz retain their ancient customs, especially in rural areas.', imgSrc: 'https://i.ibb.co/F52ks9S/kultura-1.png'},
        { id: 2, text2: 'In order to really get to know the Kyrgyz culture, we recommend tourists to visit the jailoo in the summer. This is the name of the high mountain pasture in Kyrgyzstan, it is located at an altitude of 2500-3000 meters above sea level).', imgSrc2: 'https://i.ibb.co/wycQJwW/kultura-2.png'},
        { id: 3, text3: 'Kyrgyz people celebrate Muslim holidays - Navrus, Eid al-Fitr, Eid al-Adha. All these and other holidays are accompanied by traditional Kyrgyz games, music, dance and theatrical performances.', imgSrc3: 'https://i.ibb.co/3pkv6cj/kultura-3.png'},
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
            <Heading text={t('KG_Page.KG_Title')}/>
            <div onClick={() => setModalActive(true)}>
                <Button text={t('KG_Page.KG_ResBtn')} />
            </div>
            </div>
        </div>
        <div className={styles.container} >
        <div className={styles.Kyrgyzstan__info} >
          <p>{t('KG_Page.KG_Info')}</p>
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
              )
            })
          }
          </Swiper>
        </div>
        <div className={styles.capital__city} >
          <div className={styles.capital__info} >
          <Heading tag='h2' text={t('KG_Page.KG_Capital_Title')} />
          <p>{t.KG_Capital_p1}<br/>{t('KG_Page.KG_Capital_p2')}</p>
          </div>
          <div className={styles.capital__pic} >
            <div className={styles.df} >
              <img src="https://i.ibb.co/K9FX9tm/Stolitsa-1.png" alt='photo' />
              <img src="https://i.ibb.co/k4HJn80/Stolitsa-2.png" alt='photo' />
            </div>
          </div>
        </div>
        <div className={styles.weather__city} >
          <div className={styles.weather__info} >
            <Heading tag='h2' text={t.KG_Weather_Title} />
            <p>{t('KG_Page.KG_Weather_p1')}<br/>{t('KG_Page.KG_Weather_p2')}<br/>{t('KG_Page.KG_Weather_p3')}</p>
          </div>
          <div className={styles.weather_pic} >
            <div className={styles.df} >
              <img src="https://i.ibb.co/VY85bb4/klimat-1.png" alt='photo' />
              <img src="https://i.ibb.co/RSbN2Nz/klimat-2.png" alt='photo' />
              <img src="https://i.ibb.co/34mXdSC/klimat-3.png" alt='photo' />
            </div>
          </div>
        </div>
        <div className={styles.culture__city} >
          <Heading tag="h2" text={t('KG_Page.KG_Culture_Title')} />
          {info === 'ru' ? (
                culture.map(item => {
                    return (
                      <div className={styles.culture} key={item.id} >
                        <div className={styles.df}>
                          <div className={styles.culture__info}>
                            <p>{item.text}</p>
                          </div>
                          <div>
                            <img src={item.imgSrc} />
                          </div>
                        </div>
                        <div className={styles.df}>
                          <div>
                            <img src={item.imgSrc2}/>
                          </div>
                          <div className={styles.culture__info}>
                            <p>{item.text2}</p>
                          </div>
                        </div>
                        <div className={styles.df}>
                          <div className={styles.culture__info}>
                            <p>{item.text3}</p>
                          </div>
                          <div>
                            <img src={item.imgSrc3} />
                          </div>
                        </div>
                      </div>
                    );
                  })
          ):(
            cultureEng.map(item => {
                return (
                  <div className={styles.culture} key={item.id} >
                    <div className={styles.df}>
                      <div className={styles.culture__info}>
                        <p>{item.text}</p>
                      </div>
                      <div>
                        <img src={item.imgSrc} />
                      </div>
                    </div>
                    <div className={styles.df}>
                      <div>
                        <img src={item.imgSrc2}/>
                      </div>
                      <div className={styles.culture__info}>
                        <p>{item.text2}</p>
                      </div>
                    </div>
                    <div className={styles.df}>
                      <div className={styles.culture__info}>
                        <p>{item.text3}</p>
                      </div>
                      <div>
                        <img src={item.imgSrc3} />
                      </div>
                    </div>
                  </div>
                );
              })
          )
          }
        </div>
        <div className={styles.nationalFood__} >
          <Heading tag='h2' text={t('KG_Page.KG_NationalFood_Title')} />
          <div>
            <div className={styles.df} >
              <img src='https://i.ibb.co/556vCyf/kuhnya-1.png' alt='photo' />
              <img src='https://i.ibb.co/m9jjbpc/kuhnya-2.png' alt='photo' />
              <img src='https://i.ibb.co/FngBkVV/kuhnya-3.png' alt='photo' />
            </div>
          </div>
          <div className={styles.nationalFood__info} >
            <p>{t('KG_Page.KG_NationalFood')}</p>
          </div>
          <div>
            <div className={styles.df} >
              <img src='https://i.ibb.co/hXn5cVL/kuhnya-4.png' alt='photo' />
              <img src='https://i.ibb.co/K5RMS44/kuhnya-5.png' alt='photo' />
              <img src='https://i.ibb.co/XYq0mYP/kuhnya-6.png' alt='photo' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kyrgyzstan