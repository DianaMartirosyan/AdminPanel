import styles from '../newUser/NewUser.module.css';

export default function NewUser (){
    return (
        <div className={styles.newUser}>
            <h1>New User</h1>
            <form className ={styles.newUserForm}>
                    {/* This is newUser Form Left */}
                          <div className={styles.newUserLeftForm}>
                                    <div className={styles.newUserItem}>
                                        <label>UserName</label>
                                        <input placeholder = 'jahn'  />
                                    </div>
                                
                                    <div className={styles.newUserItem}>
                                        <label>Email</label>
                                        <input type='email' placeholder = 'john@gmail.com' />
                                    </div>
                                    <div className={styles.newUserItem}>
                                        <label>Phone</label>
                                        <input type='number' placeholder = ' +374 91 111111' />
                                    </div>
                                    <div className={styles.newUserItem}>
                                        <label>Gender</label>
                                            <div className={styles.newUserGender}>
                                                    <input type='radio' name = 'gender' id='male' value='male'/>
                                                    <label for = 'male'>Male</label>
                                                    <input type='radio' name = 'gender' id='female' value='female'/>
                                                    <label for = 'female'>Female</label>
                                                    <input type='radio' name = 'gender' id='other' value='other'/>
                                                    <label for = 'other'>Other</label>
                                            </div>

                                    </div> 
                            </div> 

                      {/* This is newUser Form Right */}
                            <div className={styles.newUserRightForm}>
                                    {/* <div className={styles.newUserItem}>
                                        <label>Full Name</label>
                                        <input placeholder = 'Jahn Smit' type='text' value = 'John Smit' />
                                    </div> */}
                                    {/* <div className={styles.newUserItem}>
                                        <label>Password</label>
                                        <input type='password' placeholder = 'password'  />
                                    </div> */}
                                    <div className={styles.newUserItem}>
                                        <label>Address</label>
                                        <input type='text' placeholder = 'New York'  />
                                    </div>
                                    
                                    
                                        <div className={styles.newUserItem}>
                                            <label>Active</label>
                                            <select name='active' id='active'>
                                                <option value='yes'>Yes</option>
                                                <option value='no'>No</option>
                                            </select>
                                        </div>
                            </div>
                                
                                
                        


            </form>   
                <button className={styles.newUserCreateButton}> Create</button>

        </div>
    )
} 