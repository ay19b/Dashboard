import React from 'react'
import "./charts.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  linearGradient,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ChartArea() {
	const { menu } = useContext(MenuContext);
	const matches = useMediaQuery('(max-width:1000px)');
    const data = [
        {
          "name": "2016",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "2017",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "2018",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "2019",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "2020",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "2021",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "2022",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
	  
	  

  return (
    <div className='chart'>
      <div className='headTable'>
        <h4 className='headText'>Salse & Revenue</h4>
        <h4 className='headBtn'>Show All</h4>
      </div>
    <AreaChart data={data} width={matches?!menu?870:870:!menu?490:625} height={250} style={{width:'100%'}}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="var(--red)" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="var(--red)" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="var(--red)" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="var(--red)" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="var(--red)" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="var(--red)" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
</div>
  )
}
