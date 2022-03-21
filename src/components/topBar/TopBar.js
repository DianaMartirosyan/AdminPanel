import React from 'react';
import styles from '../topBar/TopBar.module.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import {Link} from "react-router-dom";





class TopBar extends React.Component {
    render() {
      return (

          <div className={styles.topbar}>
                <div className={styles.topbarWrapper}>
                    <Link to='/'>
                        <div className={styles.leftbar}>Admin Panel</div>
                        </Link>
                        <div className={styles.rightbar}> 
                           
                            
                            <div className={styles.iconContainer}>
                                < Language />
                          
                            </div>
                            
                            <div className={styles.iconContainer}>
                                <Settings />
                               
                            </div>
                            <div className={styles.iconContainer}>
                                <NotificationsNone />
                                <span className={styles.iconBadge}> 2</span>
                            </div>
                            
                            
                        </div>
                         
                       
                       
                 </div>
          </div>

      )
    }
  }

  export default TopBar

  