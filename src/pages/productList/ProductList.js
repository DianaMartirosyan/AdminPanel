import styles from '../productList/ProductList.module.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {productsRows} from '../../Data';
import {Link} from "react-router-dom";
import { useState } from 'react';


export default function ProductList (){

    const[data, setData] = useState(productsRows);
         const handleDelete = (id) => { 
              setData(data.filter (item => item.id != id) )

   }

   const[dataEdit, setDataEdit] = useState(productsRows);
            const handleEdit = (id) => {
                let item = (dataEdit.filter(item => item.id == id)[0])  
                setDataEdit(item);
                console.log(item)
             
            }
  


     const columns = [
                        {
                            field: 'id', 
                            headerName: 'ID',
                            flex:1 
                        },
                        { 
                            field: 'product', 
                            headerName: 'Product',
                            flex:2 ,
                            renderCell:(params) => { 
                                                      return (
                                                            <div className={styles.productListUser}>
                                                            <img className={styles.productListImg} src = {params.row.img}/>
                                                            {params.row.product}
                                                                </div>
                                                        )
                                            
                                                     }
                        },

            
                        {
                            field: 'stock',
                            headerName: 'Stock',
                            description: 'This column has a value getter and is not sortable.',
                            sortable: false,
                            flex:2 ,
                        },
                        {
                            field: 'price',
                            headerName: 'Price',
                            description: 'This column has a value getter and is not sortable.',
                            sortable: false,
                            flex:2 ,
                        },
                        {
                            field: 'status',
                            headerName: 'Status',
                            description: 'This column has a value getter and is not sortable.',
                            sortable: false,
                            flex:2 ,
                        },
                        {
                            field:'action',
                            headerName:"Action",
                            flex:2 ,
                            renderCell:(params) => { 
                                                    return (
                                                            <div className={styles.productListUser}>
                                                            { <Link to = {"/products/" + params.row.id}>
                                                                <button onClick={() => handleEdit(params.row.id)} className={styles.productListEdit}>Edit</button>
                                                            </Link> 
                                                            }
                                                                <DeleteOutline onClick = {() => handleDelete(params.row.id)} className={styles.productListDelete}/>

                                                            </div>
                                                             )
                  
                            }   
                         }
                    ];
    return (
        <div className={styles.productList}>
             <DataGrid 
                rows={data} disableSelectionOnClick
                columns={columns}
                checkboxSelection
                xs={8}
            
            />
        </div>
    )
}
