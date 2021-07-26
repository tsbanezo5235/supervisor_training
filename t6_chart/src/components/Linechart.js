import React from 'react'
import ApexChart from 'react-apexcharts' 

const Linechart = () => {
  const Dummydata = {
          
    series: [{
        
        name: "百香果",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      fill: {
        opacity: 1
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        colors: '#9AFF02'
      },
      title: {
        text: '百香果每月累積銷售量',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月'],
      }
    },
  };

  return (
    <React.Fragment>
      <ApexChart
        options={Dummydata.options}
        series={Dummydata.series}
        type='line'
        height={350}
      ></ApexChart>
    </React.Fragment>
  )
}

export default Linechart;