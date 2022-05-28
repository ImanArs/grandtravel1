import React from 'react'


import styles from './Modal.module.css'

const Modal = ({active, setActive, children}) => {


  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}  >
      <div className={active ? "modal__content active" : "modal__content" } onClick={e => e.stopPropagation()} >
        {children}
        <div className={styles.list} >
          <ul>
            <li>
            <a href="tel:+996705444437"> <button>+996  705 44 44 37 </button></a>
            </li>
            <li>
              <a href="tel:+996778881580"><button>+996  778 88 15 80</button></a>
            </li>
            <li>
              <a href="tel:+996708155089"><button>+996  708 15 50 89</button></a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://wa.me/996705444437"><button><img src='https://i.ibb.co/svj6sK7/whatsApp.png' alt='whatsapp' /></button></a>
            </li>
            <li>
              <a href="https://wa.me/996778881580"><button><img src='https://i.ibb.co/svj6sK7/whatsApp.png' alt='whatsapp' /></button></a>
            </li>
            <li>
              <a href="https://wa.me/996708155089"><button><img src='https://i.ibb.co/svj6sK7/whatsApp.png' alt='whatsapp' /></button></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal