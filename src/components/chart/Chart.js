import React from 'react';
import styles from '../chart/Chart.module.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';





function Chart({ title, data, dataKey, grid }) {


  return (

    <div className={styles.chart}>
      <h3 className={styles.chertTitle}> {title}</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}

        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray="3 3" />}

          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Active User" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

    </div>


  )

}

export default Chart