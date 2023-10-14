import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const DonutCharts = () => {
  
   
   


  const data = [
    { name: 'Group A', value: 150 },
    { name: 'Group B', value: 250},
    { name: 'Group C', value: 300},
    
  ];
  const COLORS = ['#f52e93', '#f1effc', '#6038e9'];
  const renderActiveShape = () => {
    return(
      <text textAnchor="middle" >
        {'Hello'}
      </text>
    )
  }  


return (
  <div className='my-10 w-[300px] h-[290px] text-black bg-white'>

  <PieChart width={300} height={300}>
  <Pie
        data={data}
        cx={145}
        cy={140}
        activeShape={renderActiveShape}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        
      </Pie>
  </PieChart>
  </div>
);
}
 

export default DonutCharts