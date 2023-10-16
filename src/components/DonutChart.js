import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const DonutCharts = () => {
  
   
   


  const data = [
    { name: 'Group A', value: 150},
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

  const onPieEnter = ()=>{
    console.log("i am active")
  }


return (
  <div className='md:my-5 sm:mt-28 sm:mb-8 sm:ml-8 md:ml-0  md:h-[270px] sm:w-[330px] lg:w-[300px] lg:h-[267px] shadow-xl rounded-lg text-black bg-white'>

  <PieChart width={300} height={300}>
  <Pie
        data={data}
        cx={145}
        cy={125}
        activeShape={renderActiveShape}
        innerRadius={50}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <>
          <Cell key={`cell-${index}`} onMouseEnter={onPieEnter}   fill={COLORS[index % COLORS.length]} />

          </>
        ))}
        
      </Pie>
  </PieChart>
  </div>
);
}
 

export default DonutCharts