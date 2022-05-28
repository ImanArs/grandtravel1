import React, { useEffect, useState } from 'react'
import Button from './Button/Button'
import ButtonB from './Button/ButtonB'
import Heading from './Heading/Heading'
import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery' 
import Modal from './modal/Modal'
import Circle from './Circle/Circkle'
import Header from './Header/Header'
import styles from './Home.module.scss'
import SideBar from './SideBAr/SideBar'
import { useTranslation } from 'react-i18next'
import {Link } from 'react-router-dom'
import '../i18next'


// Import Swiper React components
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"


const TourTrans = () => {
	const { t } = useTranslation()

	const [info, setInfo] = useState()
	useEffect(() => {
		if (localStorage.getItem('i18nextLng') !== '') {
			setInfo(localStorage.getItem('i18nextLng'))
		}
	}, [info])
}

const Home = () => {
	const tours = [
		{ id: 1, img:'https://i.ibb.co/P6PrDK7/tour-16.png', title: 'Памирскому краю.', text:'Утром у вас есть время до обеда, чтобы осмотреть старый город Ош. Посещение холма Соломона, пещерного музея, паломники Сулеймана проходили через этот район, с вершины холма открывается панорамный вид на город Ош ', path: '/tjtours' },
		{ id: 2, img:'https://i.ibb.co/L9q2Wvp/tour-2.png', title: 'Две страны в одном туре.', text:' В этом путешествии вы увидите популярные направления целых стран, сравните жизни, познакомитесь с культурами, полюбуетесь природой и другими аспектами.  ', path: '/pairtours' },
		{ id: 3, img:'https://i.ibb.co/JCbYLQF/tour-4.png', title: 'Достопремичательности Кыргызстана.', text:'Утром у вас есть время до обеда, чтобы осмотреть старый город Ош. Посещение холма Соломона, пещерного музея, паломники Сулеймана проходили через этот район...', path: '/kgtours' },
	  ];
	  
	  const toursEng = [
		{ id: 1, img:'https://i.ibb.co/P6PrDK7/tour-16.png', title: 'Pamir region.', text:'In the morning you have time until lunch to explore the old city of Osh. Visiting Solomon`s hill, cave museum, Suleiman`s pilgrims passed through this area, from the top of the hill there is a panoramic view of the city of Osh ', path: '/tjtours' },
		{ id: 2, img:'https://i.ibb.co/L9q2Wvp/tour-2.png', title: 'Two countries in one tour.', text:'On this journey, you will see the popular destinations of entire countries, compare lives, get to know cultures, admire nature and other aspects. ', path: '/pairtours' },
		{ id: 3, img:'https://i.ibb.co/JCbYLQF/tour-4.png', title: 'Sights of Kyrgyzstan.', text:'In the morning you have time until lunch to explore the old city of Osh. Visit Solomon`s hill, cave museum, Suleiman`s pilgrims passed through this area...', path: '/kgtours' },
	  ];	
	
	  let circle = [
		{id: 1, Img: "https://i.ibb.co/bFcd7hN/circle-1.png", text: "Памирский Тракт",},
		{id: 2, Img: "https://i.ibb.co/bQSknK3/circle-2.png", text: "Джип Туры",},
		{id: 3, Img: "https://i.ibb.co/71tPYJ7/circle-3.png", text: "Езда на яках, лошадях и верблюдах",},
		{id: 4, Img: "https://i.ibb.co/tYVMRjq/circle-4.png", text: "Кыргызстан, Таджикикстан, Казахстан",},
		{id: 5, Img: "https://i.ibb.co/0jgFgdT/circle-5.png", text: "Фанские Горы",},
	  ];
	  let circleEng = [
		{id: 1, Img: "https://i.ibb.co/bFcd7hN/circle-1.png", text: "Pamir Highway",},
		{id: 2, Img: "https://i.ibb.co/bQSknK3/circle-2.png", text: "Jeep Tours",},
		{id: 3, Img: "https://i.ibb.co/71tPYJ7/circle-3.png", text: "Riding yaks, horses and camels",},
		{id: 4, Img: "https://i.ibb.co/tYVMRjq/circle-4.png", text: "Kyrgyzstan, Tajikistan, Kazakhstan",},
		{id: 5, Img: "https://i.ibb.co/0jgFgdT/circle-5.png", text: "Fann Mountains",},
	  ];  

	const [modalActive, setModalActive] = useState(false);
	const { t } = useTranslation()
	const [info, setInfo] = useState()
	useEffect(() => {
		if (localStorage.getItem('i18nextLng') !== '') {
			setInfo(localStorage.getItem('i18nextLng'))
		}
	}, [info])

	return (
		<>
			<Modal active={modalActive} setActive={setModalActive} ></Modal>
			<SideBar />
			<Header setInfo={setInfo} info={info} />
			<div className={styles.Main_content}> 
      <div className={styles.Main_title} >
        <h1> {t('Main_Page.Main_Title')}</h1>
      </div>
      <div className={styles.reserve_Btn }  onClick={() => setModalActive(true)} >
        <Button text={t('Main_Page.Main_Phone')} />
      </div>
      <div className={styles.Connect_pic} >
        <img src='https://i.ibb.co/gVz9p9v/Connect1-2.png'  />
      </div>
    </div>

    <div className={styles.About_part} >
      <div className={styles.about_info} >
        <div className={styles.about__text} >
          <div className={styles.about__title} >
            <Heading tag="h2" text={t('Main_Page.Main_About_title')} /> 
          </div>
          <div className={styles.about__txt} >
            <p>{t('Main_Page.Main_About')}</p>
          </div>
        </div>
      </div>

      <div className={styles.about_pic} >
        <img src='https://i.ibb.co/ZxHCWwb/about-pic.png'  />
        <div className={styles.overlay_pic} >
          <img src="https://i.ibb.co/HGW1MfX/ring-About-pic.png" />
        </div>
      </div>
    </div>

    
	<div className={styles.Gallery} >
		<h2>{t('Main_Page.Main_Gallery')}</h2>
      <Gallery />
    </div>

    <div className={styles.Circle} >
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
            </div>
          </SwiperSlide>
          </div>
        )
      })
    }
  </Swiper>
		  )}
	  </div>
    </div>
    

    <div className={styles.client_pageBG}>
      <div className={styles.client_page}>
        <div className={styles.client_text} >
          <p>
            <span>{t('Main_Page.Main_Client_span')}</span> {t('Main_Page.Main_Client_p')}
          </p>
          <p>{t.Main_Client_p_2}</p>
          <div onClick={() => setModalActive(true)}>
            <Button text={t('Main_Page.Main_Phone')} />
          </div>
        </div>
        <div className={styles.client_pic}>
          <img src="https://i.ibb.co/LrWbc3d/client.png" />
        </div>
      </div>
    </div>

    <div className={styles.company_info} > 
        <p>{t('Main_Page.Main_Company_p')}</p>
    </div>

    <div>
		<div className={styles.KGZ_router} >
        <div><h2>{t('Main_Page.Main_KG')}</h2></div>
        <div>
          <Link to="/kyrgyzstan" >
            <a>
              <ButtonB text={t('Main_Page.Main_MoreBtn')} />
            </a>
          </Link>
        </div>
      </div>
	  <div className={styles.TJZ_router} >
        <div><h2>{t('Main_Page.Main_TJ')}</h2></div>
        <div>
          <Link to="/tajikistan" >
            <a>
              <ButtonB text={t('Main_Page.Main_MoreBtn')} />
            </a>
          </Link>
        </div>
      </div>

	  	<div className={styles.tours_map} >
			<h2 className={styles.green}>Актуальные туры</h2>
			<div className={styles.tours} id='Tours'>
				{info === 'ru' ? (
					tours.map((item) => (
						<div className={styles.card} key={item.id} >
							<div>
							<img src={item.img} />
							</div>
							<div className={styles.info} >
							<h3>{item.title}</h3>
							<p>{item.text}</p>
							</div>
							<div>
							<Link to={item.path}>
							
							<ButtonB text={t('Main_Page.Main_ResBtn')}/>
							
							</Link>
							</div>
						</div>
					))
				):(
					toursEng.map((item) => (
						<div className={styles.card} key={item.id} >
							<div>
							<img src={item.img} />
							</div>
							<div className={styles.info} >
							<h3>{item.title}</h3>
							<p>{item.text}</p>
							</div>
							<div>
							<Link to={item.path}>
							
							<ButtonB text={t('Main_Page.Main_ResBtn')}/>
							
							</Link>
							</div>
						</div>
					))
				)}
			</div>
    	</div>
    </div>
		</>
	)
	
}

export default Home
