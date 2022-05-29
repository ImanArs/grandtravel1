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

const KgTours = () => {
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
      <div className={styles.hidden_slider}>
      {
        tours.map((item, id) => {
          return (
            <SwiperSlide key={id} >
            <div className={styles.Cards} >
              <div className={styles.Card__info}>
                <div>
                  <img src={item.srcImg} alt='tours' />
                </div>
                <div className={styles.Card__text}>
                    <h4>{item.title}</h4>
                    <p>
                      {item.place}<br/>
                      {item.heightW}<br/>
                      {item.time}<br/>
                      {item.details} 
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
      <div className={styles.hidden_slider}>
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
                      {item.place}<br/>
                      {item.heightW}<br/>
                      {item.time}<br/>
                      {item.details} 
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
// https://i.ibb.co/LN9ksWV/tour-1.png
// https://i.ibb.co/L9q2Wvp/tour-2.png
// https://i.ibb.co/DCHvGCz/tour-3.png
// https://i.ibb.co/JCbYLQF/tour-4.png
// https://i.ibb.co/j4bQQPR/tour-5.png
// https://i.ibb.co/mG2ssRh/tour-6.png
// https://i.ibb.co/hDK8L1v/tour-7.png
// https://i.ibb.co/6D6zjY8/tour-8.png
// https://i.ibb.co/QDk8Tkc/tour-9.png
// https://i.ibb.co/gtG5m33/tour-10.png
// https://i.ibb.co/QmcZTkK/tour-11.png
// https://i.ibb.co/J5nkHH9/tour-12.png
// https://i.ibb.co/qyYDDv9/tour-13.png
// https://i.ibb.co/3ShbRY5/tour-14.png
// https://i.ibb.co/JHGgJ2J/tour-15.png
// https://i.ibb.co/P6PrDK7/tour-16.png
// https://i.ibb.co/tZPh6C3/tour-17.png
// https://i.ibb.co/thPkphn/tour-18.png
// https://i.ibb.co/rt6cBkP/tour-19.png
// https://i.ibb.co/PtJjDgY/tour-20.png
// https://i.ibb.co/dpQSrhp/tour-21.png
let tours = [
  {
      id: 1, title: "День 1", place: "Прибытие в Бишкек и экскурсия по городу.", details:"",
      time: "Ваш гид/водитель встретит вас в аэропорту. Трансфер в гостевой дом, отдых.", heightW: "Altitude: 800 m ", 
      text: "-Ваш гид встретит вас на обед. Посетите центр города, чтобы осмотреть музеи, парки, площадь Ала-Тоу и местные базары. Вечером после ужина в одной из лучших столовых возвращение в гостевой дом.", srcImg: "https://i.ibb.co/dpQSrhp/tour-21.png"
  },
  {
      id: 2, title: "День 2", place: "Бишкек – Чункурчак  ", details:"Расстояние: 45 км, 1 ч 35 м ",
      time: "Водитель/гид встретит вас в гостевом доме. Посетите рынки для покупок перед поездкой.  ", heightW: "Высота 2000 м ", 
      text: "-Остановка, чтобы полюбоваться прекрасным видом возле первого «этнокультурного» курортного комплекса Супара Чункурчак, прежде чем отправиться к следующему пункту назначения - Водопаду Голуби (высота 30 м). Припаркуемся в одном из мест над культурным центром Татыр и пройдем около 1 км до водопада. Там вы можете насладиться видом и увидеть банджи-джампинг. - Поездка в один из гостевых домов в долине Чункурчак, небольшая прогулка по великолепной природе, посещение второго этнокультурного курортного комплекса Супара Чункурчак по желанию.", srcImg: "https://i.ibb.co/PtJjDgY/tour-20.png"
  },
  {
      id: 3, title: "День 3", place: "Чункурчак – Кегети ", details:"Расстояние: 80 км/ 2 ч ",
      time: "- Поездка в ущелье Кегети через луга и зеленые деревья, наблюдение за образом жизни полукочевых жителей деревни.  ", heightW: " ", 
      text: "-Начнем наш поход к озеру Коль-Тор, которое является одним из самых высокогорных озер в окружении горных хребтов Тянь-Шаня. Это 6-километровый поход туда и обратно, начиная с 1850 м и заканчивая 2780 м, в общей сложности 3-5 часов в зависимости от того, как долго вы решите оставаться на озере. Вернитесь к своей машине и поезжайте в гостевой дом в соседней деревне.   ", srcImg: "https://i.ibb.co/rt6cBkP/tour-19.png"
  },
  {
      id: 4, title: "День 4", place: "Кегети-Бурана-Балыкчы ", details:"Расстояние 167 км/3ч ",
      time: "", heightW: " ", 
      text: "-Выходим из ущелья Кегети и въезжаем в Ысыккульский район. Остановка у башни Бурана и музея под открытым небом. Это руины древнего города Баласагын, основанного Караханидами в IX веке. Сам минарет был построен в 11 веке на высоте 45 м, но сейчас он оценивается всего в 25 м из-за нескольких землетрясений. Внутри лестницы ведут на вершину минарета, откуда открывается панорамный вид. На прилегающем поле полно очень интересных резных каменных надгробий. -Выезд в Балыкчи через Боомское ущелье. Остановитесь в гостевом доме. ", srcImg: "https://i.ibb.co/thPkphn/tour-18.png"
  },
  {
      id: 5, title: "День 5", place: " Балыкчы-Барскоон-Сказка-Джети Огуз", details:"Расстояние: 270 км 3-4 часа ",
      time: " ", heightW: " ", 
      text: "-Сегодня мы открываем для себя самые живописные уголки южного Иссык-Куля: водопад Барскоон и каньон Сказка. Песчаные холмы от ветровой эрозии принимали разные очертания, создавая вид, как в сказке. Поднимитесь на смотровую площадку и насладитесь панорамой. Размещение в гостевом доме «Джети Огуз» или проживание в юрте. ", srcImg: "https://i.ibb.co/tZPh6C3/tour-17.png"
  },
  {
      id: 6, title: "День 6", place: "Джети Огуз-Кок Жайык ", details:"Расстояние: 15км 30м ",
      time: "-Двигайтесь дальше в долину Кок-Жайык, где вы сможете покататься на лошадях в течение 2-3 часов. ", heightW: " ", 
      text: "Утром поднимитесь на холмы, чтобы увидеть весь вид на долину сверху. Захватывающие дух виды на семь скал, образующих Сказку, скалы в форме разбитого сердца и зеленые луга с можжевельником, животные, пасущиеся в горах, и заснеженные вершины хребтов Тянь-Шаня - все это заставляет вас почувствовать себя свободен и спокоен. ", srcImg: "https://i.ibb.co/P6PrDK7/tour-16.png"
  },
  {
      id: 7, title: "День 7", place: "Кок Жайык-Кочкор ", details:"Расстояние: 250 км/ 4-5 ч ",
      time: " ", heightW: " ", 
      text: "Теперь мы вернемся к главной дороге и посетим одного из известных охотников за орлами в Боконбаево, чтобы увидеть, как орлы охотятся за своей добычей. После этого мы продолжаем путь в Кочкор, где ландшафт меняется с зеленой низменности на бесплодную горную местность. Ночь в гостевом доме.  ", srcImg: "https://i.ibb.co/JHGgJ2J/tour-15.png"
  },
  {
      id: 8, title: "День 8", place: "Караван-сарай Кочкор-Таш Рабат ", details:"Расстояние: 227 км/ 3 ч 45 м ",
      time: " ", heightW: " ", 
      text: "Мы посетим местный рынок, чтобы сделать покупки, а затем отправимся в один из самых известных археологических комплексов в Кыргызстане. Таш-Рабатский караван-сарай, построенный в 15 веке, служил местом отдыха на торговом пути из Средней Азии в Китай. В здании 40 комнат, полностью построенных из камня, что очень впечатляет. Здесь можно увидеть яков, потому что это одна из самых холодных частей страны. ", srcImg: "https://i.ibb.co/3ShbRY5/tour-14.png"
  },
  {
      id: 9, title: "День 9", place: "Таш-Рабат – озеро Сон-Куль ", details:"Расстояние: 250 км/5ч ",
      time: " ", heightW: "Ночевка в юртах.  ", 
      text: "После завтрака мы возвращаемся к главной дороге через уникальный ландшафт Нарынской области. Через перевал Молдо Ашуу (3346 м) мы достигнем высокогорного озера Сон-Куль на высоте 3016 м, чтобы понаблюдать и испытать настоящую кочевую жизнь.", srcImg: "https://i.ibb.co/qyYDDv9/tour-13.png"
  },
  {
      id: 10, title: "День 10", place: " Песня Куль-Бишкек", details:" ",
      time: " ", heightW: " ", 
      text: "-Возвращаемся в Бишкек через Суусамырскую долину и перевал Тоо Ашуу (3594м). Проведите день, отдыхая или прогуливаясь по Бишкеку в последний раз перед нашим прощальным ужином. Ночь в гостинице. ", srcImg: "https://i.ibb.co/J5nkHH9/tour-12.png"
  },
  {
      id: 11, title: "День 11", place: "Отвоз в аэропорт в назначенное время. ", details:" ",
      time: "Конец тура! ", heightW: " ", 
      text: " ", srcImg: "https://i.ibb.co/QmcZTkK/tour-11.png"
  },
];

let toursEng = [
  {
      id: 1, title: "Day 1", place: "Arrival in Bishkek and city tour ", details:"",
      time: "Your guide / driver will meet you at the airport. Transfer to the guest house, resting time. ", heightW: "Altitude: 800 m ", 
      text: "-Your guide will meet you for lunch. Visit the downtown to explore museums, parks, the Ala too Square and local bazaars. In the evening after dinner in one of the best canteens, return to guest house. ", srcImg: "https://i.ibb.co/dpQSrhp/tour-21.png"
  },
  {
      id: 2, title: "Day 2", place: "Bishkek –Chunkurchak  ", details:"Distance: 45 km, 1 h 35 m ",
      time: "Driver/ Guide will pick you up at the guest house. Visit markets for shopping before the trip.  ", heightW: "Altitude 2000 m ", 
      text: "-Stop to admire a beautiful view near the first “ethno-cultural” Supara Chunkurchak resort complex, before driving to the next destination - Pigeons Waterfall (30 m high). We will park at one of the places above Tatyr cultural centre and walk about 1 km to reach the waterfall. There you can enjoy the view and see bungee jumping. -Drive to one of the guesthouses in the Chunkurchak Valley, taking a short hike in the gorgeous nature, visiting the second ethno-cultural Supara Chunkurchak resort complex if so desired. ", srcImg: "https://i.ibb.co/PtJjDgY/tour-20.png"
  },
  {
      id: 3, title: "Day 3", place: "Chunkurchak –Kegeti ", details:"Distance: 80km/ 2h ",
      time: "-Drive to Kegeti Gorge through meadows and green trees observing the lifestyles of semi nomadic villagers.  ", heightW: " ", 
      text: "-Start our hike to Kol Tor Lake, which is one of the highest alpine lakes surrounded by the Tian Shan mountain ranges.  This is a 6 km roundtrip hike starting at 1850 m and going to 2780m, taking 3-5 hours in total depending on how long you choose to stay at the lake.  Return to your car and drive to a guesthouse in the nearby village.   ", srcImg: "https://i.ibb.co/rt6cBkP/tour-19.png"
  },
  {
      id: 4, title: "Day 4", place: "Kegeti-Burana-Balykchy ", details:"Distance 167 km/3h ",
      time: "", heightW: " ", 
      text: "-We leave Kegeti Gorge and enter the Ysyk kul region. We stop at the Burana Tower and open-air museum. These are the ruins of the ancient town of Balasagyn which was established by Karakhanids in the 9th century. The minaret itself was built in the 11th century at a height of 45 m, but now it is estimated at only 25 m due to several earthquakes. Inside, ladders lead you to the top of the minaret from where you have a panoramic view. The adjacent field is full of very interesting carved stone grave markers. -Drive to Balykchy through the Boom Gorge. Stay in a guesthouse.   ", srcImg: "https://i.ibb.co/thPkphn/tour-18.png"
  },
  {
      id: 5, title: "Day 5", place: " Balykchy-Barskoon-Skazka-Jeti Oguz", details:"Distance: 270 km 3-4h ",
      time: " ", heightW: " ", 
      text: "-Today we discover the most scenic parts of south Yssyk kul: Barskoon waterfall and Skazka (Fairy Tale) Canyon.  Sandy hills took different shapes from wind erosion, creating a view as in a fairy tale. Climb to the viewpoint and enjoy the panorama. Accommodation in a Jeti Oguz guest house or yurt stay. ", srcImg: "https://i.ibb.co/tZPh6C3/tour-17.png"
  },
  {
      id: 6, title: "Day 6", place: "Jeti Oguz-Kok Jaiyk ", details:"Distance: 15km 30m ",
      time: "-Drive further to Kok Jaiyk valley where you can ride horses for a  2-3 h ride. ", heightW: " ", 
      text: "In the morning hike up to the hills to observe the whole view of valley from the top. There are breathtaking views of the seven rocks which make up the Fairy Tale formation, rocks like the shape of a broken heart and green meadows with junipers, animals grazing on the mountains and the snow-covered peaks of the Tian Shan ranges all make you feel free and at peace. ", srcImg: "https://i.ibb.co/P6PrDK7/tour-16.png"
  },
  {
      id: 7, title: "Day 7", place: "Kok Jaiyk-Kochkor ", details:"Distance: 250km/ 4-5h ",
      time: " ", heightW: " ", 
      text: "We now turn back to the main road and visit one of the famous eagle hunters in Bokonbaevo to experience how eagles hunt for their prey. Afterwards we continue to Kochkor where the landscape changes from green lowland to barren highlands. Overnight in a guest house.  ", srcImg: "https://i.ibb.co/JHGgJ2J/tour-15.png"
  },
  {
      id: 8, title: "Day 8", place: "Kochkor-Tash Rabat Caravansaray ", details:"Distance: 227km/ 3h 45m ",
      time: " ", heightW: " ", 
      text: "We visit a local market to do some shopping, then head to one of the most famous archeological complexes in Kyrgyzstan. The Tash Rabat Caravansaray, dating back to the 15th century, served as a resting place on the trade route from Central Asia to China. The building has 40 rooms built completely of stone, which is very impressive. Here you can see yaks because it is one of the coldest parts of the country. ", srcImg: "https://i.ibb.co/3ShbRY5/tour-14.png"
  },
  {
      id: 9, title: "Day 9", place: "Tash Rabat--Song Kul Lake ", details:"Distance: 250 km/5h ",
      time: " ", heightW: "Overnight in yurts.  ", 
      text: "After breakfast we drive back to the main road through the unique landscape of Naryn region. We reach the alpine lake Song kul at 3016 m via the Moldo Ashuu Pass (3346m) to observe and experience real nomadic life. ", srcImg: "https://i.ibb.co/qyYDDv9/tour-13.png"
  },
  {
      id: 10, title: "Day 10", place: " Song Kul-Bishkek", details:" ",
      time: " ", heightW: " ", 
      text: "-We return to Bishkek via the Suusamyr Valley and Too Ashuu Pass (3594m). Spend the afternoon relaxing or strolling around Bishkek for the last time before our farewell dinner. Overnight in a hotel. ", srcImg: "https://i.ibb.co/J5nkHH9/tour-12.png"
  },
  {
      id: 11, title: "Day 11", place: "Transfer to airport at arranged time. ", details:" ",
      time: "End of tour! ", heightW: " ", 
      text: " ", srcImg: "https://i.ibb.co/QmcZTkK/tour-11.png"
  },
];

export default KgTours