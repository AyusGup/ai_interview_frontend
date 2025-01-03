import CircularProgress from "./charts/ProgressCircle";
import { useEffect, useState } from "react";

export default function PerformanceCard({title, scores, percent}) {
    const [data, setData] = useState({
        title: "System design interview",
        percent: 50,
        scores: {
            "positivity": 8,
            "culture_fit": 7,
            "relevance": 8,
            "experience": 7,
            "overall_score": 7.5
        }
    });

    useEffect(() => {
        if(title && scores && percent) {
            setData({
                title: title,
                percent: percent,
                scores: scores
            });
        }
    }, [title, scores, percent]);

    return (
        <div className="flex flex-wrap w-4/5 lg:w-[500px] gap-8 p-4 border rounded-xl">
           <div className="flex-2">
              <CircularProgress percent={data.percent} title="Percentile"/>
           </div>
           <div className="flex-1 pt-8">
              <div>{data.title}</div>
              <div>Adobe</div>
              <div className="flex flex-col font-bold gap-4 mt-4">
                <span >Positivity: {data.scores.positivity}</span>
                <span >Culture Fit: {data.scores.culture_fit}</span>
                <span >Relevance: {data.scores.relevance}</span>
                <span >Experience: {data.scores.experience}</span>
                <span >Overall Score: {data.scores.overall_score}</span>
              </div>
           </div>
        </div>
    );
}