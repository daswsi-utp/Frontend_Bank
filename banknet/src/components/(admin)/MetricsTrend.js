// src/components/(admin)/MetricsTrend.js
'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MetricsTrend = ({ metrics }) => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28'];
  
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {metrics.map((metric, index) => (
            <Line
              key={metric.name}
              type="monotone"
              dataKey="value"
              data={metric.data}
              name={metric.name}
              stroke={colors[index % colors.length]}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricsTrend;