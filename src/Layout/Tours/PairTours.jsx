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
const PairTours = () => {
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
        <h1 className={styles.title}>Две страны в одном туре.</h1>
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
          tours.map(item => {
            return (
              <div key={item.id} >
              <SwiperSlide key={item.id} >
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
              </div>
            );  
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
          <p className={styles.more_text} >{text} </p>
          </div> 
        </div> 
    </div>
      ):(
        <div>
          <h1 className={styles.title}>Две страны в одном туре.</h1>
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
            toursEng.map(item => {
              return (
                <div key={item.id} >
                <SwiperSlide key={item.id} >
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
                </div>
              );  
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
            <p className={styles.more_text} >{text} </p>
            </div> 
          </div> 
      </div>
      )}
    </div>
  )
}
let tours = [
  {
      id: 1, title: "День  1", place: "Самарканд-Педжикент Семь озер-Кули калон 181 км  ", details:" ",
      time: " ", heightW: " ", 
      text: "Наш водитель встретит вас на пограничном переходе между Самаркандом и Пенджикентом. Езжайте прямо в Долину Семи Озер. Среди холмов есть много маленьких озер, расположенных друг над другом, как лестница. Остановитесь, чтобы отдохнуть, сфотографироваться, насладиться красотой высоких Фанских гор и кристально чистых озер. Возвращение в деревню Панджрут; остановиться в местном доме. ", srcImg: "https://i.ibb.co/LN9ksWV/tour-1.png"
  },
  {
      id: 2, title: "День  2", place: "Куликалон поход ", details:" ",
      time: " ", heightW: " ", 
      text: "После завтрака переезд в кемпинг Artuch Alp, 13 км. Поход к Кули калон (6 км), затем, на ваш выбор, продолжение к трем другим озерам: Кули Сиёх, Бибиджаннат и Ду Шоха. Общий переход 17 км. Спокойная атмосфера, кристально чистые озера с рыбой и уникальная природа избавят вас от шума и стресса городской жизни. Остановитесь в альп-кемпе «Вертикаль» или в кемпинге у озера Алавуддин. Все оборудование будет предоставлено нами, так что вы должны взять только свои личные вещи.", srcImg: "      https://i.ibb.co/L9q2Wvp/tour-2.png"
  },
  {
      id: 3, title: "День  3", place: "Алавуддин-Искандар-Куль-Душанбе 191 км ", details:" ",
      time: " ", heightW: " ", 
      text: "Сегодня начинаем в 10:00. Покиньте живописные Фанские горы, по пути мимо озера Искандер-Куль и едете в Душанбе. В Душанбе остановитесь в уютном гостевом доме недалеко от центра города. ", srcImg: "      https://i.ibb.co/DCHvGCz/tour-3.png"
  },
  {
      id: 4, title: "День  4", place: "Экскурсия по городу Душанбе-Куляб 230 км ", details:" ",
      time: " ", heightW: " ", 
      text: "Сегодня мы исследуем Душанбе, столицу Таджикистана. Посетите центральные парки, рынки, музеи. После обеда продолжим наш путь в Куляб - один из крупнейших городов страны. По пути остановимся у Нуракского водохранилища и крепости Хулбук, построенной в 9-11 веках нашей эры. Ночь в мини-отеле. ", srcImg: "      https://i.ibb.co/JCbYLQF/tour-4.png"
  },
  {
      id: 5, title: "День  5", place: "Куляб-Калайкум 170 км ", details:" ",
      time: " ", heightW: " ", 
      text: "Езжайте по Памирскому тракту на юг, откуда открывается вид на Афганистан через реку Пяндж. Пересекаем Шурабадский перевал (2200 м) и КПП, наблюдая за несколькими таджикскими селами. Прибытие в Калаикум ранним вечером. Калайкум - первый район Горно-Бадахшанской автономной области (ГБАО) - закрытой части страны, поэтому все пассажиры и туристический экипаж получили разрешения на проезд сюда. Ночевка дома.  ", srcImg: "https://i.ibb.co/j4bQQPR/tour-5.png"
  },
  {
      id: 6, title: "День  6", place: "Халайкум – Хорог 240 км ", details:" ",
      time: " ", heightW: " ", 
      text: " Из Калайкумб отправляйтесь в сторону Хорога - впереди нас ждет 240 км местности с захватывающими пейзажами возвышающихся до неба гор Памира, по пути впадающих в великую реку Пяндж, которая образует границу с Афганистаном. Пара часов утренней езды по основному маршруту, наслаждаясь пейзажами, и мы достигаем Хорога, столицы ГБАО – несмотря на наши разрешения, будьте готовы к возможности дополнительной бумажной волокиты. Сегодня мы остаемся в относительной роскоши, в отеле или пансионе.", srcImg: "https://i.ibb.co/mG2ssRh/tour-6.png"
  },
  {
      id: 7, title: "День  7", place: "Хорог  ", details:" ",
      time: " ", heightW: " ", 
      text: "Сегодня у нас расслабляющий день после долгих поездок. Во второй половине дня посещение интересного местного рынка, парка и ботанического сада. Отдохните на живописной смотровой площадке в саду. Ночь в гостинице или гостевом доме. ", srcImg: "https://i.ibb.co/hDK8L1v/tour-7.png"
  },
  {
      id: 8, title: "День  8", place: "Хорог – Ямг (вдоль живописной границы с Афганистаном) 183 км ", details:" ",
      time: " ", heightW: " ", 
      text: "Мы начинаем наше путешествие утром в Ваханскую долину. Следующая остановка в горячих источниках Гармчашма, где можно искупаться (по желанию). Отсюда мы въезжаем в таджикскую половину Ваханской долины (совместно с Афганистаном) и должны пройти еще 100 км. Мы проезжаем местные шахты по добыче драгоценных камней, упомянутые Марко Поло в его описании того, что он назвал «регионом горы Шугнон» - самая известная рубиновая шахта Кох-и-Лал, которая видна с дороги. Поездка в близлежащую деревню Намадгути, посещение крепости Хаха. Это впечатляющее сооружение возвышается над естественно сформированной каменной платформой и восходит к кушанской эпохе 3-го века нашей эры. Обратите внимание, что форт иногда до сих пор используется местными военнослужащими таджикской армии. В этом районе есть несколько древних крепостей, и мы посетим форт Ямчун, пожалуй, самый впечатляющий из них. Мы делаем перерыв у горячего источника Биби-Фатима, названного в честь дочери пророка Мухаммеда, где местные женщины верят, что они могут повысить свою фертильность. У мужчин и женщин будет отдельное время для купания; однако удобства являются основными, но виды с горячих источников впечатляют. Пикник на панорамном месте. Сам Ишкашим хоть и является областным центром, но по сути все же крупным ", srcImg: "https://i.ibb.co/6D6zjY8/tour-8.png"
  },
  {
      id: 9, title: "День  9", place: "Ямг – Булунгкуль 151 км", details:" ",
      time: " ", heightW: " ", 
      text: "Двигаясь дальше, пересекаем второй высокогорный перевал Харгушт (4300 м). В этом путешествии мы покидаем зеленые долины Вахана и попадаем в скалистый, в основном бесплодный, но впечатляющий ландшафт. Возвращаемся к Памирскому тракту, маршруту между Хорогом и Ошем, проложенному в 1931 году по высокогорной местности. Подъезжайте к озерам Булункуль и Яшилкуль. Ночевка в доме, где можно приготовить еду в самой высокогорной и самой холодной деревне на Памире.", srcImg: "https://i.ibb.co/QDk8Tkc/tour-9.png"
  },
  {
      id: 10, title: "День  10", place: "Булунг-Куль-Мургаб-Озеро Кара-Куль 276км ", details:" ",
      time: " ", heightW: " ", 
      text: "Мы останавливаемся у наскальных рисунков пещеры Шахты, датируемых примерно 8 веком до нашей эры. Прибытие в село Мургаб («каменное»), которое находится на «угле», где Китай с востока и Кыргызстан с севера соединяются с Таджикистаном. Посетите небольшой рынок, где можно найти интересные сувениры и пообщаться с местными жителями. Поездка к Кара-Кулю, самому высокому озеру Таджикистана на высоте 3960 м. Пересеките второй по высоте перевал в мире Акбайтал на высоте 4655 м и прибудете в село Кара-Куль рядом с озером. Остановитесь в местной семье. ", srcImg: "https://i.ibb.co/gtG5m33/tour-10.png"
  },
  {
      id: 11, title: "День  11", place: "В Каракуле есть три варианта: ", details:" ",
      time: " ", heightW: " ", 
      text: "1. Поход на полуостров, высшая точка 5000м, откуда сверху видно все озеро. 2. Посетите пик Ленина со стороны Таджикистана, исследуя неизведанные части долины, которые неизвестны большинству посетителей и местных жителей. 3. Сядьте на берегу озера и наслаждайтесь видом и яками, прогуляйтесь по деревне и поговорите с местными жителями. Ночевка в доме Саадат.", srcImg: "https://i.ibb.co/QmcZTkK/tour-11.png"
  },
  {
      id: 12, title: "День  12", place: "Каракуль до озера Тулпаркуль (юрточный лагерь Пик Ленина) 150км ", details:" ",
      time: " ", heightW: " ", 
      text: "Сегодня наш последний день в Таджикистане. На вершине перевала Кизиларт (4270 м) находится таджикско-кыргызский пограничный переход, который займет не менее получаса, но пока вы ждете, у вас будет захватывающий вид на горы. Имейте в виду, что даже летом у нас могут быть минусовые температуры и метели в приграничных районах, поэтому убедитесь, что у вас есть дополнительные слои одежды на случай, если нас задержат из-за формальностей. Мы подъезжаем к юрточному лагерю на озере Тулпар-куль, откуда великолепные виды на заснеженные горы, зеленые равнины и несколько голубых озер посреди холмов навсегда останутся в вашей памяти как первое впечатление о Кыргызстане. Ночевка в юрте. ", srcImg: "https://i.ibb.co/J5nkHH9/tour-12.png"
  },
  {
      id: 13, title: "День  13", place: "Тулпар кул-Ош 240км ", details:" ",
      time: " ", heightW: " ", 
      text: "Оставляем позади сельские районы Алайского района, поворачиваем обратно в Ферганскую долину, пересекая 3 перевала: Катын-Арт (3200м), Талдык (3650м) и Чирчик (2500м). В пути насладитесь пейзажами гор Памиро-Алая, рек Кызыл-Суу и Гульча. Прибытие в Ош, со временем для отдыха. Вечером посетите один из лучших ресторанов Оша, где подают блюда кыргызской кухни. Остановитесь в мини-гостинице. ", srcImg: "https://i.ibb.co/qyYDDv9/tour-13.png"
  },
  {
      id: 14, title: "День  14", place: "Ош-Казарман 260км ", details:" ",
      time: " ", heightW: " ", 
      text: "Утром посещение Ошского базара, который является одним из крупнейших рынков в Центральной Азии. Посетите музей на Соломоновой горе. Продолжаем наше путешествие по северо-восточному Кыргызстану через перевал Сары-Кыр (3000 м). Изгибы и повороты весь день вверх и вниз по перевалу приводят нас в село Казарман. По дороге устраиваем пикник у реки или ночуем в юртах кочевников в горах. Ночь в гостевом доме.  ", srcImg: "https://i.ibb.co/3ShbRY5/tour-14.png"
  },
  {
      id: 15, title: "День  15", place: "Казарман-Сонг-Куль 190 км ", details:" ",
      time: " ", heightW: " ", 
      text: "Через перевал Молдо Ашуу (3201 м) продолжаем путь к высокогорному озеру Сон-Куль. Здесь мы можем наблюдать за традиционной жизнью кыргызских кочевников, пасущих стада лошадей, овец и коров. Остановка в небольшой деревне на обед. Ночевка рядом с кыргызскими кочевниками в юрте у озера. Наблюдайте за закатом над озером и наблюдайте за звездами в чистом небе.", srcImg: "https://i.ibb.co/JHGgJ2J/tour-15.png"
  },
  {
      id: 16, title: "День  16", place: " ", details:" ",
      time: " ", heightW: " ", 
      text: "Утром мы можем наблюдать за дойкой коров и наблюдать за восходом солнца над Сонг-Кулем. По запросу мы можем организовать традиционные кыргызские игры на лошадях, такие как «Кыз куумай» или «Кок Бору» за дополнительную плату. Или возьмите напрокат лошадь и поезжайте с гидом на смотровую площадку или просто посетите близлежащие юрточные лагеря. Отдохните рядом с озером или поплавайте, если хотите. Ночевка в юрте.", srcImg: "https://i.ibb.co/P6PrDK7/tour-16.png"
  },
  {
      id: 17, title: "День  17", place: "Сонг-кул-Боконбаева 254 км ", details:" ",
      time: " ", heightW: " ", 
      text: "Утром спускаемся с Сон-Куля, чтобы увидеть другое популярное озеро - Иссык-Куль. На Боконбаева вы можете испытать традиционное искусство орлиной охоты (охота с орлом), за дополнительную плату. Посетите мастер-класс по рукоделию в деревне, где можно купить сувениры. Остановитесь в гостевом доме.", srcImg: "https://i.ibb.co/tZPh6C3/tour-17.png"
  },
  {
      id: 18, title: "День  18", place: "Боконбаева-Сказка-Жети Огуз 130 км ", details:" ",
      time: " ", heightW: " ", 
      text: "Самая живописная часть региона. В каньоне Сказка (Сказка) наблюдайте за холмами из красного песка, образованными в результате ветровой эрозии, создающими сказочный вид. Поднимитесь на смотровую площадку и насладитесь панорамой. Размещение в гостевом доме «Джети Огуз» или в юрте.", srcImg: "https://i.ibb.co/thPkphn/tour-18.png"
  },
  {
      id: 19, title: "День  19", place: "Джеты Огуз-Бишкек 390 км ", details:" ",
      time: " ", heightW: " ", 
      text: "Утром осмотрите живописный каньон. Поднимитесь или покатайтесь на лошади до смотровой площадки. Затем мы отправились с этого кочевого пастбища в Бишкек, столицу Кыргызстана. Прибытие во второй половине дня. Отдохните в своем отеле, прежде чем отправиться в один из популярных ресторанов на наш прощальный ужин. ", srcImg: "https://i.ibb.co/rt6cBkP/tour-19.png"
  },
  {
      id: 20, title: "День  20", place: "Поездка в аэропорт или другое транспортное сообщение. ", details:" ",
      time: " ", heightW: " ", 
      text: "Конец тура. ", srcImg: "https://i.ibb.co/PtJjDgY/tour-20.png"
  },
];

let toursEng = [
  {
      id: 1, title: "Day  1", place: "Samarkand-Penjikent Seven Lakes-Kuli kalon 181 km  ", details:" ",
      time: " ", heightW: " ", 
      text: "Our driver will meet you on the border crossing between Samarkand and Penjikent. Drive straight to Seven Lakes Valley. Set in the middle of hills there are many small lakes above each other like a ladder. Stop to relax, take photos, enjoy the beauty of the high Fann Mountains and crystal clear lakes. Drive back to Panjrut village; stay at a local home stay.  ", srcImg: "https://i.ibb.co/LN9ksWV/tour-1.png"
  },
  {
      id: 2, title: "Day  2", place: "Kuli kalon hike ", details:" ",
      time: " ", heightW: " ", 
      text: "After breakfast drive to Artuch Alp camping, 13 km. Hike to Kuli kalon (6km), then at your choice, continue to the other three lakes: Kuli Siyoh, Bibijannat and Du Shoha. Total hike 17 km. The quiet atmosphere, crystal clear lakes with fish, and unique nature relieves you from the noise and stress of urban life.  Stay at Alp Camp Vertikal or camp near the Alavuddin lake. All the equipment will be provided by us so you should just carry your personal stuff. ", srcImg: "https://i.ibb.co/L9q2Wvp/tour-2.png"
  },
  {
      id: 3, title: "Day  3", place: "Alavuddin-Iskandar kul- Dushanbe 191 km ", details:" ",
      time: " ", heightW: " ", 
      text: "Today we start at 10:00 am. Leave the scenic Fann Mountains, on the way passing Iskander kul lake and driving to Dushanbe. In Dushanbe stay in a cozy guest house near the city centre. ", srcImg: "https://i.ibb.co/DCHvGCz/tour-3.png"
  },
  {
      id: 4, title: "Day  4", place: "Dushanbe city tour-Kulob 230 km ", details:" ",
      time: " ", heightW: " ", 
      text: "Today we explore Dushanbe, the capital of Tajikistan. Visit central parks, markets, museums. After lunch continue our journey to Kulob - one of the biggest cities in the country. On the way, we stop at Nurak Reservoir and Hulbuk Fortress dating back to the 9-11th centuries AD. Overnight in a mini hotel. ", srcImg: "https://i.ibb.co/JCbYLQF/tour-4.png"
  },
  {
      id: 5, title: "Day  5", place: "Kulob-Kalai kum 170 km ", details:" ",
      time: " ", heightW: " ", 
      text: "Drive on the Pamir Highway towards the south, where you'll have a view of Afghanistan across the river Panj. Cross Shurabad Pass (2200m) and checkpoint, observing several Tajik villages. Arrive in Kalaikum in the early evening. Kalaikum is the first district of the Gorno-Badakshan Autonomous Oblast (GBAO) - a restricted part of the country thus all passengers and tour crew have obtained permits to travel here. Overnight at home stay.  ", srcImg: "https://i.ibb.co/j4bQQPR/tour-5.png"
  },
  {
      id: 6, title: "Day  6", place: "Khalaikum to Khorog 240 km ", details:" ",
      time: " ", heightW: " ", 
      text: " From Kalaikumb leave towards Khorog - 240 km of terrain ahead of us, with spectacular scenery of the sky-scraping Pamir Mountains, along the way joined by the great Panj River which forms the border with Afghanistan. A couple of hours early-morning driving by the main route, enjoying scenery and we reach Khorog, the capital of the GBAO – despite our permits, be prepared for the possibility of some additional paperwork. We stay in relative luxury tonight, in a hotel or guesthouse.", srcImg: "https://i.ibb.co/mG2ssRh/tour-6.png"
  },
  {
      id: 7, title: "Day  7", place: "Khorog  ", details:" ",
      time: " ", heightW: " ", 
      text: "Today we have a relaxing day after the long drives. In the afternoon, visit the interesting local market, park and botanical garden. Relax at the scenic garden viewpoint. Overnight in hotel or guesthouse. ", srcImg: "https://i.ibb.co/hDK8L1v/tour-7.png"
  },
  {
      id: 8, title: "Day  8", place: "Khorog to Yamg (along the spectacular Afghanistan border) 183km ", details:" ",
      time: " ", heightW: " ", 
      text: "We start our trip in the morning to the Wakhan Valley. Next stop is at Garmchashma hot springs for an (optional) dip. From here we enter the Tajik half of the Wakhan Valley (shared with Afghanistan) and have a further 100km to cover. We pass regional gem mines mentioned by Marco Polo in his descriptions of what he called the “Mt Shugnon region” - the most famous Koh-i-Lal ruby mine which is visible from the road. Detour to the nearby village of Namadguti to visit the Khahkha Fortress. This impressive structure rises from a naturally formed platform of rock and dates back to the Kushan era of the 3rd Century AD. Please note that the fort is sometimes still used by local Tajik army personnel. There are a number of ancient fortresses in the area, and we visit Yamchun Fort, perhaps the most impressive of them all. We take a break at the Bibi-Fatima hot spring, named for the Prophet Mohammed’s daughter, where local women believe they can increase their fertility. Men and women will have separate bathing time; however facilities are basic, but the views from the hot springs are spectacular. Picnic at a panoramic spot. Ishkashim itself may be the regional centre, but it is essentially still a large  ", srcImg: "https://i.ibb.co/6D6zjY8/tour-8.png"
  },
  {
      id: 9, title: "Day  9", place: "Yamg to Bulung kul 151 km ", details:" ",
      time: " ", heightW: " ", 
      text: "Moving on, we cross a second high-altitude pass, Khargusht  (4300 m). On this journey, we leave behind the green valleys of the Wakhan and enter a landscape that is rocky, mostly barren but dramatic.  We return to Pamir Highway, the route between Khorog and Osh completed in 1931 across a high altitude terrain. Drive up to see the Bulunkul & Yashilkul lakes. Overnight in a home stay where you can cook food at the highest and coldest village in the Pamirs. ", srcImg: "https://i.ibb.co/QDk8Tkc/tour-9.png"
  },
  {
      id: 10, title: "Day  10", place: "Bulung kul-Murghab- Lake Kara-kul 276km ", details:" ",
      time: " ", heightW: " ", 
      text: "We stop at Shakhty cave rock paintings dated around the 8th century BC. Arrive in Murghab (“stone”) village, which is at the “corner” where China from the east and Kyrgyzstan from the north join Tajikistan. Visit a small market where you can find some interesting souvenirs and talk to locals. Drive to Kara-kul which is the highest lake in Tajikistan at 3960m. Cross the second highest road pass in the world, Akbaital at 4655m, and arrive in Kara-kul village next to the lake. Stay at a local homestay. ", srcImg: "https://i.ibb.co/gtG5m33/tour-10.png"
  },
  {
      id: 11, title: "Day  11", place: "In Kara kul there are three options: ", details:" ",
      time: " ", heightW: " ", 
      text: "1.	Hike to the peninsula, highest point 5000m, where you will see the whole lake from the top. 2.Visit Lenin Peak from the Tajikistan part, exploring undiscovered parts of the valley, which is unknown to the majority of visitors and locals alike.  3.Sit lakeside and enjoy the view and the yaks, walk around the village and talk to locals. Overnight in Saadat home stay. ", srcImg: "https://i.ibb.co/QmcZTkK/tour-11.png"
  },
  {
      id: 12, title: "Day  12", place: "Karakul to Tulparkul Lake (Lenin Peak yurt camp) 150km ", details:" ",
      time: " ", heightW: " ", 
      text: "Today is our final day in Tajikistan.  At the top of Kizilart Pass (4270m) is the Tajikistan-Kyrgyzstan border crossing, which will take at least half an hour, but while you wait you will have spectacular mountain views. Be warned that even in summer, we could have sub-zero temperatures, and blizzards throughout the border areas, so make sure you have some extra layers at hand in case we are delayed by formalities. We drive to Tulpar kul lake yurt camp, where magnificent views of snow-covered mountains, green plains and several blue lakes in the midst of hills, will remain in your memory forever as a first impression of Kyrgyzstan. Overnight in a yurt. ", srcImg: "https://i.ibb.co/J5nkHH9/tour-12.png"
  },
  {
      id: 13, title: "Day  13", place: "Tulpar kul-Osh 240km ", details:" ",
      time: " ", heightW: " ", 
      text: "We leave behind the rural areas of the Alay region turning back to the Fergana Valley, crossing 3 passes:  Katyn Art (3200m), Taldik (3650m) and Chyirchyk {2500m). On the journey, enjoy the scenery of the Pamir Alay Mountains, the Kyzyl-Suu River, and the Gulcha River. Arrive in Osh, with time to relax. In the evening visit one of Osh’s best restaurants showcasing Kyrgyz food. Stay in a mini hotel. ", srcImg: "https://i.ibb.co/qyYDDv9/tour-13.png"
  },
  {
      id: 14, title: "Day  14", place: "Osh-Kazarman 260km ", details:" ",
      time: " ", heightW: " ", 
      text: "In the morning, visit Osh Bazaar which is one of the largest markets in Central Asia. Visit the museum at Solomon Mountain. We continue our trip to northeastern Kyrgyzstan via Sary Kyr pass (3000 m). Twists and turns all day up and down the pass bring us to Kazarman village. On the way, we picnic near the river or hosted at nomadic yurts in the mountains. Overnight in a guest house.  ", srcImg: "https://i.ibb.co/3ShbRY5/tour-14.png"
  },
  {
      id: 15, title: "Day  15", place: "Kazarman-Song kul 190 km ", details:" ",
      time: " ", heightW: " ", 
      text: "Via Moldo Ashuu pass (3201m) we continue our journey to the alpine lake Song kul. Here we can watch the traditional lives of Kyrgyz nomads grazing herds of horses, sheep and cows. Stop at a small village for lunch. Overnight close to Kyrgyz nomads in a yurt at the lake. Watch sunset over the lake and star-gaze the clear sky. ", srcImg: "https://i.ibb.co/JHGgJ2J/tour-15.png"
  },
  {
      id: 16, title: "Day  16", place: " ", details:" ",
      time: " ", heightW: " ", 
      text: "In the morning we can experience cow milking and watch sunrise over Song kul. Upon request we can organize traditional Kyrgyz games on horseback, like ‘Kyz kuumai’ or ‘Kok Boru’ at an additional cost. Or rent a horse and ride with your guide to the viewpoint or just visit nearby yurt camps. Relax next to the lake or swim if you want. Overnight in a yurt. ", srcImg: "https://i.ibb.co/P6PrDK7/tour-16.png"
  },
  {
      id: 17, title: "Day  17", place: "Song kul-Bokonbaeva 254 km ", details:" ",
      time: " ", heightW: " ", 
      text: "In the morning we descend from Song kul to see the other popular lake - Issyk kul. At Bokonbaeva you can experience the traditional art of eagle hunting (hunting with an eagle), for an additional cost. Visit a handicraft master class at the village where you can buy souvenirs. Stay at a guest house. ", srcImg: "https://i.ibb.co/tZPh6C3/tour-17.png"
  },
  {
      id: 18, title: "Day  18", place: "Bokonbaeva-Skazka-Jeti Oguz 130 km ", details:" ",
      time: " ", heightW: " ", 
      text: "The most scenic part of the region. At Skazka (Fairy Tale) Canyon, observe red sand hills formed by the effects of wind erosion creating a fairy tale view. Climb to the viewpoint and enjoy the panorama. Accommodation in Jeti Oguz guest house or a yurt stay. ", srcImg: "https://i.ibb.co/thPkphn/tour-18.png"
  },
  {
      id: 19, title: "Day  19", place: "Jeti Oguz-Bishkek 390 km ", details:" ",
      time: " ", heightW: " ", 
      text: "In the morning explore the scenic canyon. Climb or ride a horse to the viewpoint. Then we set off from this nomadic pasture to Bishkek, the capital city of Kyrgyzstan. Arrive by afternoon. Relax in your hotel before going to one of the popular restaurants for our farewell dinner.  ", srcImg: "https://i.ibb.co/rt6cBkP/tour-19.png"
  },
  {
      id: 20, title: "Day  20", place: "Drive to airport or other onward connection. ", details:" ",
      time: " ", heightW: " ", 
      text: "End Of Tour. ", srcImg: "https://i.ibb.co/PtJjDgY/tour-20.png"
  },
];

export default PairTours