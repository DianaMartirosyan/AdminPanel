import styles from '../widgetLarge/WidgetLarge.module.css';
import userImage from '../../../src/assets/girl.jpeg';


export default function WidgetLarge (){
    const Button = ({type}) => {
        return <button className = {'widgetButton' + type}>{type}</button>
    }
    return (
        <div className={styles.widgetLarge}>
             <h3 className = {styles.widgetLargeTitle}> Latest transaction </h3>
             <table className = {styles.widgetLargeTable}>
                 <tr className={styles.widgetLargeTr}>
                     <th className={styles.widgetLargeTh}>Castomer </th>
                     <th className={styles.widgetLargeTh}>Date </th>
                     <th className={styles.widgetLargeTh}>Amount </th>
                     <th className={styles.widgetLargeTh}>Status </th>
                 </tr>
                 <tr className={styles.widgetLargeTr}>
                    <td className={styles.widgetLargeUser}>
                            <img className={styles.widgetLargeUserImage} src= {userImage} alt='userImage'  />
                            <span className={styles.widgetLargeName}>Susan</span>
                          

                    </td>
                    <td className={styles.widgetLargeDate}>2 Jun 2022</td>
                    <td className={styles.widgetLargeAmount}>$215</td>
                    <td className={styles.widgetLargeStatus}>
                        <Button type='Approved'/>
                    </td>
                

                 </tr>
                 <tr className={styles.widgetLargeTr}>
                    <td className={styles.widgetLargeUser}>
                            <img className={styles.widgetLargeUserImage}  src= {userImage} alt='userImage'  />
                            <span className={styles.widgetLargeName}>Susan</span>
                    </td>
                    <td className={styles.widgetLargeDate}>2 Jun 2022</td>
                    <td className={styles.widgetLargeAmount}>$215</td>
                    <td className={styles.widgetLargeStatus}>
                        <Button type='Declined'/> 
                    </td>
                

                 </tr>
                 <tr className={styles.widgetLargeTr}>
                    <td className={styles.widgetLargeUser}>
                            <img className={styles.widgetLargeUserImage}  src= {userImage} alt='userImage'  />
                            <span className={styles.widgetLargeName}>Susan</span>
                    </td>
                    <td className={styles.widgetLargeDate}>2 Jun 2022</td>
                    <td className={styles.widgetLargeAmount}>$215</td>
                    <td className={styles.widgetLargeStatus}>
                     <Button type = 'Pending' />
                       
                    </td>
                

                 </tr>
             </table>
        </div>
    )
}