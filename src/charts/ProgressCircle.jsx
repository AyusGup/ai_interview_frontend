import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress({ percent, title }) {
  const [percentage, setPercentage] = useState(50);

  useEffect(() => {
    if (percent) {
      setPercentage(percent);
    }
  }, [percent]);

  return (
    <div className="w-64 p-4">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#4caf50",
          pathColor: "#4caf50",
          trailColor: "#e6e6e6",
        })}
      />

      <div className="mt-10 text-[1em] text-[#555] text-center">
        {title}
      </div>
    </div>
  );
};
