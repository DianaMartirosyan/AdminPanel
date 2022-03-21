import styles from '../widgetSmall/WidgetSmall.module.css';
import { Visibility} from '@material-ui/icons';
import userImage from '../../../src/assets/girl.jpeg';


export default function WidgetSmall (){
    return (
        <div className={styles.widgetSmall}>
              <span className={styles.widgetSmallTitile}> New member </span>
            <ul className={styles.widgetSmallList}>
                <li className={styles.widgetSmallItem}>
                     <img src= {userImage} alt='userImage'  />

                        <div className={styles.widgetSmallUser}>
                            <p className={styles.widgetSmallUserName}> John Doe</p>
                            <p className={styles.widgetSmallUserTitle}> Web developer</p>
                        </div>
                        <button className={styles.widgetSmallButton}>
                                <Visibility  className={styles.widgetSmallVizibilityIcon} />
                                Display
                        </button>

                </li>
                <li className={styles.widgetSmallItem}>
                     <img src= {userImage} alt='userImage'  />

                        <div className={styles.widgetSmallUser}>
                            <p className={styles.widgetSmallUserName}> John Doe</p>
                            <p className={styles.widgetSmallUserTitle}> Web developer</p>
                        </div>
                        <button className={styles.widgetSmallButton}>
                                <Visibility className={styles.widgetSmallVizibilityIcon}  />
                                Display
                        </button>

                </li>
                <li className={styles.widgetSmallItem}>
                     <img src= {userImage} alt='userImage'  />

                        <div className={styles.widgetSmallUser}>
                            <p className={styles.widgetSmallUserName}> John Doe</p>
                            <p className={styles.widgetSmallUserTitle}> Web developer</p>
                        </div>
                        <button className={styles.widgetSmallButton}>
                                <Visibility className={styles.widgetSmallVizibilityIcon}  />
                                Display
                        </button>

                </li>
                <li className={styles.widgetSmallItem}>
                     <img src= {userImage} alt='userImage'  />

                        <div className={styles.widgetSmallUser}>
                            <p className={styles.widgetSmallUserName}> John Doe</p>
                            <p className={styles.widgetSmallUserTitle}> Web developer</p>
                        </div>
                        <button className={styles.widgetSmallButton}>
                                <Visibility className={styles.widgetSmallVizibilityIcon} />
                                Display
                        </button>

                </li>
            </ul>
        </div>
    )
}