import styles from "./Button.module.css"

const Button = ({text}) => {

    return (
        <button className={styles.buttonB}>{text}</button>
    )
  }
  
  export default Button
  