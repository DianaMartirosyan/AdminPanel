import React from 'react';
import styles from '../sidebar/Sidebar.module.css';
import { LineStyle, Timeline, TrendingUp, Person, Category, Contactless, 
    Assessment, MailOutline, Feedback, ChatBubbleOutline,WebAssetOutlined ,  PriorityHighOutlined}
     from '@material-ui/icons';
     import {Link} from "react-router-dom";




class Sidebar extends React.Component {
    render() {
      return (

          <div className={styles.sidebar}>

              <div className={styles.sidebarWrapper}>
                     <div className={styles.sidebarMenu}>
                            <h3 className={styles.sidebarTitle}> Dashboard</h3>
                            <ul className={styles.sidebarList}>
                                <Link to = '/'>
                                <li className={styles.sidebarItem}>
                                    <LineStyle />
                                    Home
                                </li>
                                </Link>
                                <li className={styles.sidebarItem}>
                                    < Timeline />
                                        Analytics
                                </li>
                                <li className={styles.sidebarItem}>
                                    < TrendingUp />
                                        Sales
                                </li>
                            </ul>
                     </div>

                     <div className={styles.sidebarMenu}>
                            <h3 className={styles.sidebarTitle}> Quick Menu </h3>
                            <ul className={styles.sidebarList}>
                                <Link to = '/users'> 
                                <li className={styles.sidebarItem}>
                                    <Person />
                                    Users
                                </li>
                                </Link>
                                <Link to='products'>
                                <li className={styles.sidebarItem}>
                                    <Category/>
                                        Products
                                </li>
                                </Link>
                                <li className={styles.sidebarItem}>
                                    <Contactless />
                                        Transactions
                                </li>
                                <li className={styles.sidebarItem}>
                                    <Assessment />
                                        Reports
                                </li>
                            </ul>
                     </div>

                     <div className={styles.sidebarMenu}>
                            <h3 className={styles.sidebarTitle}> Notifications</h3>
                            <ul className={styles.sidebarList}>
                                <li className={styles.sidebarItem}>
                                    <MailOutline />
                                    Mail
                                </li>
                                <li className={styles.sidebarItem}>
                                    <Feedback/>
                                        Feedback
                                </li>
                                <li className={styles.sidebarItem}>
                                    <ChatBubbleOutline />
                                        Message
                                </li>
                            </ul>
                     </div>

                     <div className={styles.sidebarMenu}>
                            <h3 className={styles.sidebarTitle}> Staff</h3>
                            <ul className={styles.sidebarList}>
                                <li className={styles.sidebarItem}>
                                    <WebAssetOutlined/>
                                    Manage
                                </li>
                                <li className={styles.sidebarItem}>
                                    < Timeline />
                                        Analytics
                                </li>
                                <li className={styles.sidebarItem}>
                                    < PriorityHighOutlined/>
                                        Reports
                                </li>
                            </ul>
                     </div>
              </div>

          </div>

      )
    }
  }

  export default Sidebar