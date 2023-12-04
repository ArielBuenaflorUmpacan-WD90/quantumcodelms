import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Grid from '@mui/material/Grid';

const chartSetting = {
  xAxis: [
    {
      label: 'Student Volumn Graduate',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Feb',
  },
  {
    london: 47,
    paris: 53,
    newYork: 100,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 100,
    seoul: 99,
    month: 'Jun',
  },
  {
    london: 59,
    paris: 60,
    newYork: 100,
    seoul: 78,
    month: 'Jul',
  },
  {
    london: 65,
    paris: 60,
    newYork: 100,
    seoul: 55,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 100,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 100,
    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}%`;

export default function HorizontalBars() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Student Passer', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
    </Grid>
    </Grid>
  );
}