import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DASHBOARD = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="container">
      <h1 className="margin-top margin-bottom">this is our DASHBOARD </h1>
      <div className="row g-5">
        {/* ----------------------------
                   BarChart
         ----------------------------- */}

        <div className="col-md-6 ">
          <h3 className="my-5">Investment vs Sales vs Revenue</h3>
          <BarChart width={630} height={350} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="sell" fill="#82ca9d" />
            <Bar dataKey="revenue" fill="#FFA500" />
          </BarChart>
        </div>

        {/* ----------------------------
                   LineChart
         ----------------------------- */}

        <div className="col-md-6">
          <h3 className="my-5">Investment vs Sales vs Revenue</h3>
          <LineChart
            width={630}
            height={350}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
            <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
            <Line type="monotone" dataKey="revenue" stroke="#FFA500" />
          </LineChart>
        </div>

        {/* ----------------------------
                   PieChart
         ----------------------------- */}

        <div className="col-md-6">
          <h3 className="my-5">Investment vs. Sales vs. Revenue</h3>
          <PieChart width={730} height={250}>
            <Pie
              data={data}
              dataKey="sell"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Tooltip />
            <Pie
              data={data}
              dataKey="sell"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>

        {/* ----------------------------
                   AreaChart
         ----------------------------- */}

        <div className="col-md-6">
          <h3 className="my-5">Investment vs Sales vs Revenue</h3>
          <AreaChart
            width={630}
            height={350}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default DASHBOARD;
