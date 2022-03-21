import styles from '../userlist/UserList.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {userRows} from '../../Data';

import {Link} from "react-router-dom";
import { useState } from 'react';



export default function UserList (){
    const [data, setData] = useState(userRows)
    const handleDelete = (id) => { 
       setData(data.filter (item => item.id != id))
    }
    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            flex:1
     },
        { 
            field: 'userName',
            headerName: 'User name', 
            flex: 2,
        },
        
      
        {
            field: 'email',
            headerName: 'Email',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 2,
          },
          {
          field: 'transaction',
          headerName: 'Transaction',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          flex: 2,
        },
        {
            field: 'status',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 2,
          },
          {
              field:'action',
              headerName:"Action",
              flex: 2,
              renderCell:(params) => { 
                  return (
                            <>
                            { <Link to = {"/user/" + params.row.id}>
                                <button className={styles.userListEdit}>Edit</button>
                            </Link> }
                                <DeleteOutline onClick = {() => handleDelete(params.row.id)} className= {styles.userListDelete}/>

                            </>
                        )
                  
                 }
          }
      ];
     
    return(
        <div className={styles.userList}>
            <DataGrid
                rows={data} disableSelectionOnClick
                columns={columns}
                pageSize={4}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}