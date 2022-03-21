import styles from '../user/User.module.css';
import userImage from '../../../src/assets/girl.jpeg';
import { CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish,LocationOn
} from '@material-ui/icons';
import { Link } from 'react-router-dom';



export default function User (){
    return (
        <div className={styles.user}>
            <div className={styles.titleContainer}>
                <h1 className={styles.editTitle}>User</h1>
                <Link to = '/newUser'>
                <button className={styles.userCreate}>Edit</button>
                </Link>
            </div>
            <div className ={styles.userContainer}>
                <div className ={styles.showUser}>
                    <div className ={styles.showUserTop}>
                         <img src= {userImage} alt='userImage' />
                         <div className={styles.showUserTopTitle}>
                             <span className={styles.userName}>John Doe</span>
                             <span className={styles.userTitle}>Web developer</span>
                         </div>

                    </div>
                    <div className ={styles.showUserBottom}>
                        <div className={styles.userAccount}>
                            <span className = {styles.showUserDetail }>Acoount Details</span>
                            <div className = {styles.showUserInfo }> 
                                 <PermIdentity />
                                <span className={styles.userShowInfoTitle}>johnchek98</span>
                            </div>
                        </div>
                           
                            <span className = {styles.showUserDetail }>Contact</span>
                            <div className = {styles.showUserInfo }> 
                                <PhoneAndroid />
                                <span className={styles.userShowInfoTitle}> +374 94 111111</span>
                            </div>
                            <div className = {styles.showUserInfo }> 
                                <LocationOn/>
                                <span className={styles.userShowInfoTitle}> NewYork</span>
                            </div>
                            <div className = {styles.showUserInfo }> 
                                 <MailOutline />
                                <span className={styles.userShowInfoTitle}>john@gmail.com</span>
                            </div>

                    </div>
                </div>
                <div className ={styles.showUserUpdate}>
                    <span className={styles.showUserUpdateEdit}>Edit</span>
                     <form className ={styles.showUserUpdateForm}>
                         <div className={styles.showUserUpdateLeft}>
                             <div className={styles.showUserUpdateItem}>
                                 <label>UserName</label>
                                 <input placeholder = 'anncheck90' className={styles.showUserUpdateInput} />
                             </div>
                             <div className={styles.showUserUpdateItem}>
                                 <label>Full Name</label>
                                 <input placeholder = 'Ann Doe' className={styles.showUserUpdateInput} />
                             </div>
                             <div className={styles.showUserUpdateItem}>
                                 <label>Email</label>
                                 <input placeholder = 'ann@gmail.com' className={styles.showUserUpdateInput} />
                             </div>
                             <div className={styles.showUserUpdateItem}>
                                 <label>Phone</label>
                                 <input placeholder = ' +374 94 111111' className={styles.showUserUpdateInput} />
                             </div>
                         </div>

                         <div className={styles.showUserUpdateRight}>
                             < div className={styles.showUserUpdateUpload}>
                                    <img className={styles.showUSerUpdateImg} src= {userImage} alt='userImage' />
                                        <div className={styles.showUpdateUploadFile}>
                                            <label htmlFor='file'> <Publish/> </label>
                                            <input type='file' id='file' style={{display:'none'}} /> 
                                        </div>
                                        <button className={styles.showUserUploadButton}> Upload</button>
                             </div>
                         </div>

                         </form>   

                    </div>

            </div>
        </div>
    )
}