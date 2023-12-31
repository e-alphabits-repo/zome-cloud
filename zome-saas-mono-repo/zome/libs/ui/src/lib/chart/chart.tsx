import React, { FC } from 'react';

import './chart.module.less';
import { Line, Bar } from '@ant-design/charts';
import { Divider } from 'antd';

/* eslint-disable-next-line */
export interface ChartProps {}

export function Chart() {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  // var datas = [
  //   {
  //     year: '1951 年',
  //     value: 38,
  //   },
  //   {
  //     year: '1952 年',
  //     value: 52,
  //   },
  //   {
  //     year: '1956 年',
  //     value: 61,
  //   },
  //   {
  //     year: '1957 年',
  //     value: 145,
  //   },
  //   {
  //     year: '1958 年',
  //     value: 48,
  //   },
  // ];
  // var configs = {
  //   data: datas,
  //   xField: 'value',
  //   yField: 'year',
  //   seriesField: 'year',
  //   legend: { position: 'top-left' },
  // };

  return (
    <>
      <div>
        {/* <Line {...config} /> */}
      </div>
      <div>{/* <Bar {...config} /> */}</div>
    </>
  );
}

export default Chart;
