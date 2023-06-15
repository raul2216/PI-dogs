
import styles from "./Landingpage.module.css"
import { Link } from "react-router-dom"

const Landingpage = () =>{

    return (
        <div className={styles['landing-container']}>
          <h1 className={styles['landing-text']}>Descripción de la página de inicio</h1>
          <button className={styles['landing-button']} onClick={handleClick}>
            Ir al Home
          </button>
        </div>
      );
    
    // <a className={style['btn-home']} href="/home">Ir a Home</a>
}





    





export default Landingpage