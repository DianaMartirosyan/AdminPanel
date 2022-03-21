import React from 'react';
import styles from '../home/Home.module.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import FeauturedInfo from '../../components/featuredInfo/FeaturedInfo.js';
import Chart from '../../components/chart/Chart';
import {data} from '../../Data';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';




class Home extends React.Component {
    render() {
      return (

          <div className={styles.home}>
                <FeauturedInfo />
                 <Chart data = {data} title ='User Analytics' grid dataKey="users"/>
                 <div className={styles.homeWidget}>
                    <WidgetSmall />
                    <WidgetLarge />
                 </div>
                       
            </div>
         

      )
    }
  }

  export default Home

  