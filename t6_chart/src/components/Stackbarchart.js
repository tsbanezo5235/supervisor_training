import React from 'react'
import ApexChart from 'react-apexcharts' 

const Stackbarchart = () => {
  const Dummydata = {
          
    series: [{
      name: '第一季',
      data: [44, 55, 41, 37, 22, 43, 21]
    }, {
      name: '第二季',
      data: [53, 32, 33, 52, 13, 43, 32]
    }, {
      name: '第三季',
      data: [12, 17, 11, 9, 15, 11, 20]
    }, {
      name: '第四季',
      data: [9, 7, 5, 8, 6, 9, 4]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: '果園每年整體銷售額(單位：K)'
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function (val) {
            return val + "K"
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K"
          }
        }
      },
      fill: {
        colors: ['lightblue', '#FFD306', '#FFAD86', 'gray'],
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
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

export default Stackbarchart;