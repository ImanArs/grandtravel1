import React, { useState } from 'react'
import styles from "./Tours.module.css"
import Header from '../Header/Header'
import { useTranslation } from 'react-i18next'
import '../../i18next'

// Import Swiper React components
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const TjTours = () => {
  const { t } = useTranslation()
	const [info, setInfo] = useState()

  const [title, setTitle] = useState(' ');
  const [place, setPlace] = useState(' ');
  const [details, setDetails] = useState(' ');
  const [time, setTime] = useState(' ');
  const [height, setHeight] = useState(' ');
  const [text, setText] = useState(' ');
  const getTitle = (title, place, details, time, height, text ) => {
    setTitle(title);
    setPlace(place);
    setDetails(details);
    setTime(time);
    setHeight(height);
    setText(text);
    // setModel(true);
  };
  return (
    <div>
      <Header setInfo={setInfo} info={info} />
      {info === 'ru' ? (
        <div>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
    <div className={styles.Card} >
      {
        tours.map((item, id) => {
          return (
            <SwiperSlide key={id} >
            <div className={styles.Cards} >
              <div className={styles.Card__info}>
                <div>
                  <img src={item.srcImg} alt='tours'/>
                </div>
                <div className={styles.Card__text}>
                    <h4>{item.title}</h4>
                    <p>
                      {item.details} <br/>
                      {item.time}<br/>
                      {item.heightW}<br/>
                      {item.place}
                    </p>
                <div>
                  <button onClick={() => getTitle(item.title, item.place, item.details, item.time, item.heightW, item.text)} > {t('Main_Page.Main_MoreBtn')} </button>
                    
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          )
        })
      }
    </div>
    </Swiper>



    <div className={styles.more} >
        <div className={styles.overlay__img} > 
        <h2 className={styles.titleCard}>{title}</h2> 
        <p>
          {place} <br/>
          {details} <br/>
          {time} <br/>
          {height} <br/>
        </p>
        <p>{text} </p>
        </div> 
      </div> 
      </div>
      ):(
        <div>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
      >
    <div className={styles.Card} >
      {
        toursEng.map((item, id) => {
          return (
            <SwiperSlide key={id} >
            <div className={styles.Cards} >
              <div className={styles.Card__info}>
                <div>
                  <img src={item.srcImg} alt='tours'/>
                </div>
                <div className={styles.Card__text}>
                    <h4>{item.title}</h4>
                    <p>
                      {item.details} <br/>
                      {item.time}<br/>
                      {item.heightW}<br/>
                      {item.place}
                    </p>
                <div>
                  <button onClick={() => getTitle(item.title, item.place, item.details, item.time, item.heightW, item.text)} > {t('Main_Page.Main_MoreBtn')} </button>
                    
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          )
        })
      }
    </div>
    </Swiper>



    <div className={styles.more} >
        <div className={styles.overlay__img} > 
        <h2 className={styles.titleCard}>{title}</h2> 
        <p>
          {place} <br/>
          {details} <br/>
          {time} <br/>
          {height} <br/>
        </p>
        <p>{text} </p>
        </div> 
      </div> 
      </div>
      )
      }
    </div>
  )
}
let tours = [
  {
      id: 1, title: "День 1", place: "Ош - пик на озере Тюльпарколь. ", details:"Детали: 250 км",
      time: "Час езды. 4-4.30мин ", heightW: "Высота над уровнем моря: 1000м-3600м", 
      text: "Утром у вас есть время до обеда на осмотр старого города Ош. Посетите холм Соломона, пещерный музей, здесь проходили паломники Сулеймана, с вершины холма открывается панорамный вид на город Ош. Затем мы отправимся на центральный рынок, который славится на всю Центральную Азию. По субботам и воскресеньям здесь проходит большой рынок животных, если наше расписание подходит для этих дней, мы можем сделать небольшую остановку. Обед в местном ресторане.   После обеда отправление в Тулпаркол через долину Алай и Чон-Алай по Памирскому шоссе. Лучшие пейзажи Тянь-Шаня и Памира, перевалы Чиирчик, Талдык, Катин Арт на высоте от 3200 до 3600 м. В Алайской долине много кочевников, идущих со своими животными (лошади, яки, овцы) в своих юртах.  Короткая остановка для общения, изучения их уклада жизни и дегустации национальных блюд, таких как кобылье, коровье, ячье молоко, натуральный йогурт, курут, сметана. Переезд в юрточный лагерь Тюльпарколь с видом на пик Ленина (7134 м). Остановитесь в юртах с базовыми условиями.", srcImg: "https://i.ibb.co/sWymdYh/tour-d-one.png"
  },
  {   
      id: 2, title: "День 2", place: "Тюльпарколь - озеро Каракуль - Мургаб", details: "Детали:260 км", 
      time: "Час езды. 4-4.30мин ", heightW: "Высота над уровнем моря: 3900-4655м",
      text: "Утром прогуляйтесь вокруг юртового лагеря, полюбуйтесь красивыми пейзажами вершины и восхода солнца.  Поднимитесь на холм за юртовым лагерем к смотровой площадке. Сегодня вы пересечете границу страны, и пейзаж чрезвычайно изменится сразу после въезда в Таджикистан. Пересекая границу Кыргызстана, вы подниметесь на перевал Кызыл-Арт 4282 м и спуститесь к самому большому озеру в Таджикистане Каракуль.(3900 м) Сделайте короткую остановку возле озера, чтобы насладиться красотой. Здесь есть небольшая деревня с населением 800 человек, где мы пообедаем в одном из домов. Переезд через второй по высоте перевал в мире, расположенный на Памирском шоссе перевал Акбайтал 4655м.  По пути посетите первый русский военный форт и первое здание в этой местности, относящееся к 1873 году.", srcImg: "https://i.ibb.co/LRdPRSb/tour-d-two.png"
  },
  {   id: 3, title: "День 3", place: "Мургаб в Жартыгумбез, Машалы в Аличор через Кеншибер.", details: "Детали: 210 км",
      time: "Час вождения. 5 часов", heightW: "Высота:3900-4320м",
      text: "После завтрака выезд в Кеншибер, перевал Белайрик 4320м. Из Машалы на машине на пару часов раньше, потом пешком до ущелья Белайрик до перевала. До конца ущелья поход займет 4 часа, во время похода возможно вы увидите овец Маркополо, а на вершине перевала открывается вид на озеро Зоркуль (Виктория), которое находится на границе с Таджикистаном. и Афганистан. Затем возвращайтесь к своей машине и продолжайте поездку в село Аличор через Акбалык (белая рыба) святой источник с большим количеством рыбы. Ночь в местном гостевом доме.", srcImg: "https://i.ibb.co/wBcJZwY/tour-d-three.png"
  },
  {   id: 4, title: "День 4", place: "Алихор - Ямгчун в долине Вахан.", details: "Детали:290 км",
      time: "Час езды. 6-7 часов", heightW: "Высота над уровнем моря: 3900-2800 м", 
      text: "Из Аличора отправляйтесь к озерам Булункуль и Яшиль-куль. Чистое бирюзовое озеро с большим количеством рыбы привлечет ваше внимание. Посетите заброшенный горячий источник и устройте пикник на фоне великолепного пейзажа. Затем мы продолжим путешествие в долину Вахан через перевал Харгуш 4235 м в первую деревню коридора Лангар. Ночевка в одном из домов по вашему выбору. ", srcImg: "https://i.ibb.co/xMzmDMF/tour-d-four.png"
  },
  {
      id: 5, title: "День 5", place: "Вахан Ямчун в Хорог", details: "Детали: 200 км", time: "Час вождения. 4-5мин", 
      heightW: "Высота: 2800-2000м", 
      text: "Следуйте вдоль афганской границы, возможно, вы увидите афганские караваны. По пути посещение древней ступы Будды на вершине холма, крепости Ямчун и бьющих из скал горячих источников. Многие местные жители со всей страны приезжают к этому горячему источнику, чтобы исцелиться от нескольких болезней. По всему коридору вам будет открываться вид на соседний Афганистан примерно в 300 м за речной границей. Ранним вечером прибытие в город Хорог (административный центр области). Оставайся в отеле.", srcImg: "https://i.ibb.co/P58kWDj/tour-d-five.png"},
  {
      id: 6, title: "День 6", place: "Хорог - Халайкум.", details: "Детали:250 км", time: "Час езды. 6-7.30мин ", 
      heightW: "Высота над уровнем моря: 2000-1200м", 
      text: "Сегодня у вас будет возможность увидеть афганских людей на рынке, если это суббота, каждую субботу в Хороге и в Ишкашиме есть рынок между таджиками и афганцами, перед отъездом из Халайкума посетите афганский рынок на пару часов раньше, тогда вы совершите незабываемое путешествие в своей жизни. Остановитесь в Халайкуме в отеле Roma.BLD. ", srcImg: "https://i.ibb.co/68SPvV6/tour-d-six.png"},
  {
      id: 7, title: "День 7", place: "Халайкум - гора Фучик.", details: "Детали:175 км", time: "Час езды. 3-4 час", 
      heightW: "Высота над уровнем моря:1200-1000м", 
      text: "Утром и Долорес небольшой город Халайкум после завтрака отправляемся в Кулоб южный маршрут Кулоб первые 100 км у вас есть шанс увидеть афганские кишлаки после перевала Шуробод попадаем в Кулоб посещаем историческую достопримечательность Мирсаидали Хамодони музей и комплекс медресе, обед в Кулобе, следующая остановка в Хулбуке здесь находится Хулбукская крепость относится к 9, 11 векам. Далее в Душанбе через Шаршарский перевал и тоннель на вершине перевала открывается вид на Нуракскую плотину, озеро зеленого цвета эффектно смотрится пейзаж с перевала, добро пожаловать в Душанбе столицу Таджикистана. Конец путешествия!", srcImg: "https://i.ibb.co/HCH5GXt/tour-d-seven.png"},
];

let toursEng = [
  {
      id: 1, title: "Day 1", place: "Osh - peak on Tyulparkol lake. ", details:"Details: 250 km",
      time: "Driving hour. 4-4.30min ", heightW: "Altitude above sea level: 1000m-3600m", 
      text: "In the morning you have time until lunch to explore the old city of Osh. Visit Solomon's hill, the cave museum, Suleiman's pilgrims passed here, from the top of the hill a panoramic view of the city of Osh opens. Then we will go to the central market, which is famous throughout Central Asia. There is a big animal market here on Saturdays and Sundays, if our schedule is suitable for these days, we can make a short stop. Lunch at a local restaurant. After lunch, departure to Tulparkol through the Alai valley and Chon-Alai along the Pamir highway. The best landscapes of the Tien Shan and Pamirs, the passes Chiirchik, Taldyk, Katin Art at an altitude of 3200 to 3600 m.  Afternoon There are many nomads in the Alay valley, walking with their animals (horses, yaks, sheep) in their yurts. A short stop for communication, learning about their way of life and tasting homemade dishes such as mare's, cow's, yak's milk, natural yoghurt, kurut, sour cream. Transfer to the Tyulparkol yurt camp with a view of Lenin Peak (7134 m). Stay in yurts with basic conditions.", srcImg: "https://i.ibb.co/sWymdYh/tour-d-one.png"
  },
  {   
      id: 2, title: "Day 2", place: "Tulparkol - lake Karakul - Murgab", details: "Details: 260 km", 
      time: "Driving hour. 4-4.30min ", heightW: "Altitude above sea level: 3900-4655m",
      text: "In the morning, take a walk around the yurt camp, admire the beautiful scenery of the summit and the sunrise.  Climb up the hill behind the yurt camp to the observation deck. Today you will cross the border of the country, and the landscape will change tremendously immediately after entering Tajikistan. Crossing the border of Kyrgyzstan, you will climb the Kyzyl-Art pass 4282 m and descend to the largest lake in Tajikistan Karakul. (3900 m) Make a short stop near the lake to enjoy the beauty. There is a small village with a population of 800 where we will have lunch in one of the houses. Moving through the second highest pass in the world, located on the Pamir Highway Akbaital pass 4655m. Along the way, visit the first Russian military fort and the first building in the area dating back to 1873.", srcImg: "https://i.ibb.co/LRdPRSb/tour-d-two.png"
  },
  {   id: 3, title: "Day 3", place: "Murgab to Zhartygumbez, Mashali to Alichor through Kenshiber.", details: "Details: 210 km",
      time: "Driving hour. 5 hours", heightW: "Height:3900-4320m",
      text: "After breakfast departure to Kenshiber, Belairik pass 4320m. From Mashala by car a couple of hours earlier, then on foot to the Belairik gorge to the pass. The hike will take 4 hours to the end of the gorge, during the hike you may see the Markopolo sheep, and at the top of the pass you can see the Zorkul (Victoria) lake, which is located on the border with Tajikistan. and Afghanistan. Then get back to your car and continue driving to Alichor village through Akbalyk (white fish) a holy spring with lots of fish. Overnight at a local guest house.", srcImg: "https://i.ibb.co/wBcJZwY/tour-d-three.png"
  },
  {   id: 4, title: "Day 4", place: "Alihor - Yamgchun in Wakhan valley.", details: "Details: 290 km",
      time: "Driving hour. 6-7 hours", heightW: "Altitude above sea level: 3900-2800 m", 
      text: "From Alichor go to Bulunkul and Yashil-Kul lakes. The clear turquoise lake with lots of fish will grab your attention. Visit an abandoned hot spring and have a picnic in front of the magnificent scenery. Then we will continue the journey to the Wakhan valley through the Khargush pass 4235 m to the first village of the Langar corridor. Overnight in one of the houses of your choice.", srcImg: "https://i.ibb.co/xMzmDMF/tour-d-four.png"
  },
  {
      id: 5, title: "Day 5", place: "Vahan Yamchun to Khorog", details: "Details: 200 km", time: "Driving hour. 4-5min", 
      heightW: "Altitude: 2800-2000m", 
      text: "Follow the Afghan border, you may see Afghan caravans. On the way, visit the ancient Buddha stupa on the top of the hill, Yamchun fortress and hot springs gushing out of the rocks. Many locals from all over the country come to this hot spring to be healed of several diseases. Along the entire corridor, you will have a view of neighboring Afghanistan, about 300 m beyond the river border. Early evening arrival in the city of Khorog (the administrative center of the region). Stay at the hotel.", srcImg: "https://i.ibb.co/P58kWDj/tour-d-five.png"},
  {
      id: 6, title: "Day 6", place: "Khorog - Halaykum.", details: "Details: 250 km", time: "Driving hour. 6-7.30min ", 
      heightW: "Altitude above sea level: 2000-1200m", 
      text: "Today you will have the opportunity to see Afghan people in the market, if it is Saturday, every Saturday in Khorog and Ishkashim there is a market between Tajiks and Afghans, before leaving Halaykum, visit the Afghan market a couple of hours earlier, then you will have an unforgettable journey of your life. Stay in Halaykum at Roma.BLD Hotel. ", srcImg: "https://i.ibb.co/68SPvV6/tour-d-six.png"},
  {
      id: 7, title: "Day 7", place: "Halaykum - Mount Fuchik.", details: "Details: 175 km", time: "Driving hour. 3-4 hour", 
      heightW: "Height above sea level:1200-1000m", 
      text: "In the morning and Dolores the small town of Halaykum after breakfast we go to Kulob the southern route Kulob the first 100 km you have a chance to see the Afghan villages after the Shurobod pass we get to Kulob we visit the historical landmark Mirsaidali Khamodoni museum and madrasah complex, lunch in Kulob, the next stop in Khulbuk is here The Khulbuk fortress belongs to the 9th and 11th centuries. Further in Dushanbe, through the Sharshar pass and the tunnel at the top of the pass, a view of the Nurak dam opens, the green lake looks impressive landscape from the pass, welcome to Dushanbe, the capital of Tajikistan. End of journey!", srcImg: "https://i.ibb.co/HCH5GXt/tour-d-seven.png"},
];

export default TjTours