import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function AreaGraph({ props, title }) {
  const [data, setData] = useState(
    [
        {
          name: "A",
          score: 40,
        },
        {
          name: "B",
          score: 30,
        },
        {
          name: "C",
          score: 20,
        },
        {
          name: "D",
          score: 27,
        },
        {
          name: "E",
          score: 18,
        }
      ]
    );
  
    useEffect(() => {
      if (props) {
        setData(props);
      }
    }, [props]);
  
  return (
    <div className="h-96 w-2/5 min-w-[400px]">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-10 text-[1em] text-[#555] text-center">
        {title}
      </div>
    </div>
  );
}
