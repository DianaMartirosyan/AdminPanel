import React from 'react';
import styles from '../featuredInfo/FeaturedInfo.module.css';
import {  ArrowDownward,  ArrowUpward} from '@material-ui/icons';




class FeauturedInfo extends React.Component {
    render() {
      return (

          <div className={styles.feauturedInfo}>
                <div className={styles.feauturedItem}>
                    <span className={styles.featuredTitle1}>  Revanue</span>
                    <div className={styles.featuredMoneyContainer}>
                        <span className={styles.featuredMoney}> $3,125</span>
                        <span className={styles.featuredMoneyRate}> 
                            -11,2
                             < ArrowDownward /> 
                         </span>
                    </div>
                    <span className={styles.featuredSub}> Compared to last month </span>
                </div>
                <div className={styles.feauturedItem}>
                    <span className={styles.featuredTitle2}> Sales</span>
                    <div className={styles.featuredMoneyContainer}>
                        <span className={styles.featuredMoney}> $4,414</span>
                        <span className={styles.featuredMoneyRate}> 
                            -1.4
                             < ArrowDownward /> 
                         </span>
                    </div>
                    <span className={styles.featuredSub}> Compared to last month </span>
                </div>
                
                <div className={styles.feauturedItem}>
                    <span className={styles.featuredTitle3}>Cost</span>
                    <div className={styles.featuredMoneyContainer}>
                        <span className={styles.featuredMoney}> $2,256</span>
                        <span className={styles.featuredMoneyRate}> 
                            +2.4
                             < ArrowUpward /> 
                         </span>
                    </div>
                    <span className={styles.featuredSub}> Compared to last month </span>
                </div>
                       
         </div>
         

      )
    }
  }

  export default FeauturedInfo