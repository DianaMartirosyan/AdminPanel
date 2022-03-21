import styles from '../product/Product.module.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../Data';
import productImg from '../../assets/comp.jpg';
import { Publish } from '@material-ui/icons';
import NewProduct from '../newProduct/NewProduct';
import { productsRows } from '../../Data';
import { useState } from 'react';



export default function Product() {

    return (
        <div className={styles.product}>
            <div className={styles.productContainer}>
                <h1 className={styles.productTitle}>Product</h1>
                <Link to='/newProduct'>
                    <button className={styles.productAddButton}>Edit</button>
                </Link>
            </div>
            <div className={styles.productTop}>
                <div className={styles.productTopLeft}>
                    <Chart data={productData} dataKey='sales' />
                </div>
                <div className={styles.productTopRight}>
                    <div className={styles.productInfoTop}>
                        <img className={styles.productItemImg} src={productImg} />
                        <span>Computer</span>
                    </div>
                    <div className={styles.productInfoItem}>
                        <span className={styles.productInfoKey}>id:</span>
                        <span className={styles.productInfoKey}>123</span>
                    </div>
                    <div className={styles.productInfoItem}>
                        <span className={styles.productInfoKey}>sales</span>
                        <span className={styles.productInfoKey}>4122</span>
                    </div>
                    <div className={styles.productInfoItem}>
                        <span className={styles.productInfoKey}>active</span>
                        <span className={styles.productInfoKey}>yes</span>
                    </div>
                    <div className={styles.productInfoItem}>
                        <span className={styles.productInfoKey}>in stock</span>
                        <span className={styles.productInfoKey}>no</span>
                    </div>
                </div>
            </div>
            <div className={styles.productInfoBottom}>
                <form className={styles.productForm}>
                    <div className={styles.productFormLeft}>
                        <label>Product Name</label>
                        <input type='text' placeholder='Computer' />
                        <label>In Stock</label>
                        <select name='inStock' id='idStock'>
                            <option value='yes'>yes</option>
                            <option value='no'>no</option>

                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value='yes'>yes</option>
                            <option value='no'>no</option>

                        </select>


                    </div>

                    <div className={styles.productFormRight}>
                        <div className={styles.productUpload}>
                            <img src={productImg} />
                            <label for='file'>
                                <Publish />
                            </label>
                            <input type='file' id='file' style={{ display: 'none' }} />
                        </div>
                        <button className={styles.productUpdateButton}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}