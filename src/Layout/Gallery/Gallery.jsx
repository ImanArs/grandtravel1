import React from 'react'

import styles from './gallery.module.css'


const Gallery = () => {

  

    let data = [
      { id: 1, imgSrc: 'https://i.ibb.co/ssjQFtY/tour-1.png'},
      { id: 2, imgSrc: 'https://i.ibb.co/4TtRFz9/tour-2.png'},
      { id: 3, imgSrc: 'https://i.ibb.co/FYZX46n/tour.png'},
      { id: 4, imgSrc: 'https://i.ibb.co/tLXBnZM/tour-4.png'},
      { id: 5, imgSrc: 'https://i.ibb.co/PgVvmqf/tour-5.png'},
      { id: 6, imgSrc: 'https://i.ibb.co/bNPGnxm/tour-6.png'},
      { id: 7, imgSrc: 'https://i.ibb.co/1606cgj/tour-7.png'},
      { id: 8, imgSrc: 'https://i.ibb.co/8mRNCwR/tour-8.png'},
      { id: 9, imgSrc: 'https://i.ibb.co/kM4kPbG/tour-9.png'},
      { id: 10, imgSrc: 'https://i.ibb.co/jryNCMn/tour-10.png'},
      { id: 11, imgSrc: 'https://i.ibb.co/j3ktZdz/tour-11.png'},
      ];

      return (
          <div className={styles.hide_gallery} >
            <div className={styles.gallery_w} >
            <div className={styles.gallery} >
              {data.map((item, id) => {
                return(
                  <div className={styles.pics} key={id} >
                    <img key={id} src={item.imgSrc} style={{width: '100%'}} alt='tours'/>
                  </div>
                )
                })}
            </div>
            </div>
          </div>
      )
}

export default Gallery

