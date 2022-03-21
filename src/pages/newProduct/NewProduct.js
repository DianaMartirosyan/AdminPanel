import styles  from '../newProduct/NewProduct.module.css';
import { productsRows} from '../../Data';

import { useState} from 'react';







export default function NewProduct (){ 
    const [name, setName] = useState( productsRows);

   
 
const handleChange = (e)=>{
       let value = (e.target.value)
       setName(value)

}


 



    const submitValue = () => {   

        const productName = {
         
           'productName':name
        
    }
               console.log(productName.productName)
  }
 
    

       


    return (
        <div className = {styles.newProduct}>
                <h1>New Product </h1>
            <form className={styles.addProductForm}>
                    <div className={styles.addProductItem}>
                        <label>Image</label>
                        <input type='file' id='file' />
                    </div>
                    <div className={styles.addProductItem}>
                                <label>Product Name</label>
                                <input   type="text" placeholder="Product Name" onChange={ handleChange}  />
                                <label>In Stock</label>
                                <input type='number' placeholder='123' />
                                <label>Price</label>
                                <input type='text' placeholder='$110.00' />
                            
                                <label>Active</label>
                                <select name='active' id='active'>
                                    <option value='yes'>yes</option>
                                    <option value='no'>no</option>

                                </select>


                    </div>
            </form>
                
            <button  onClick ={submitValue } className = {styles.createProductButton }> Create  </button> 
        
        </div>
    )
}