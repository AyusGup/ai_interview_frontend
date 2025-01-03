import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, LabelList } from "recharts";


export default function BarGraph({props, title}) {
  const [width, setWidth] = useState(window.innerWidth);

  const [data, setData] = useState(
    [
      {
        name: "A",
        Overall_Score: 40,
      },
      {
        name: "B",
        Overall_Score: 80
      },
      {
        name: "C",
        Overall_Score: 100
      },
      {
        name: "D",
        Overall_Score: 90
      },
      {
        name: "E",
        Overall_Score: 60
      }
    ]
  );

  useEffect(() => {
    if (props) {
      setData(props);
    }
  }, [props]);

  useEffect(() => {
    const updateWidth = () => {
        if (window.innerWidth < 640) {
            setWidth(350); // For small screens
        } else if (window.innerWidth < 1024) {
            setWidth(600); // For medium screens
        } else {
            setWidth(1000); // For large screens
        }
    };
    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="mt-24">
      <BarChart width={width} height={300} data={data} barSize={40} className="w-full">
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: "#333" }}
          angle={0}
          interval={0}
          tickMargin={10}
        />
        <YAxis />
        <Bar dataKey="Overall_Score" fill="#8884d8">
          <LabelList dataKey="Overall_Score" position="top" />
        </Bar>
      </BarChart>

      <div className="mt-10 text-[1em] text-[#555] text-center">
        {title}
      </div>
    </div>
  );
}
