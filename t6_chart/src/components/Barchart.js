import React from 'react'
import ApexChart from 'react-apexcharts' 

const Barchart = () => {
  const Dummydata = {
          
    series: [{
      name: '第一季銷量',
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    },{
      name: '第二季銷量',
      data: [600, 800, 777, 222, 540, 800, 690, 888, 488, 600]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['蘋果', '香蕉', '芭樂', '藍莓', '百香果', '櫻桃', '鳳梨',
          '楊桃', '橘子', '柳丁'
        ],
      }
    },
  };

  return (
    <React.Fragment>
      <ApexChart
        options={Dummydata.options}
        series={Dummydata.series}
        type='bar'
        height={350}
      ></ApexChart>
    </React.Fragment>
  )
}

export default Barchart;