import CircularProgress from "./charts/ProgressCircle";
import BarGraph from "./charts/BarGraph";
import AreaGraph from "./charts/AreaChart";
import QA from "./QA";
import { useEffect, useState } from "react";

export default function Dashboard({ props}) {
    const [data, setData] = useState([
        {
          "question": "Describe a time you successfully resolved a conflict in a team.",
          "answer": "I mediated a disagreement between two team members by listening to both sides, finding common ground, and suggesting a solution that both parties agreed on.",
          "score": {
            "positivity": 8,
            "culture_fit": 9,
            "relevance": 10,
            "experience": 7,
            "overall_score": 8.5
          }
        },
        {
          "question": "What motivates you to work hard and deliver results?",
          "answer": "I am motivated by achieving goals, learning new skills, and the sense of accomplishment from contributing to a project's success.",
          "score": {
            "positivity": 9,
            "culture_fit": 8,
            "relevance": 9,
            "experience": 6,
            "overall_score": 8
          }
        },
        {
          "question": "How do you handle tight deadlines under pressure?",
          "answer": "I prioritize tasks based on urgency, communicate effectively with the team, and maintain focus to meet deadlines without compromising quality.",
          "score": {
            "positivity": 9,
            "culture_fit": 9,
            "relevance": 8,
            "experience": 8,
            "overall_score": 8.5
          }
        },
        {
          "question": "What strategies do you use to stay updated with industry trends?",
          "answer": "I regularly attend webinars, read industry publications, and participate in professional communities to stay informed about the latest trends.",
          "score": {
            "positivity": 8,
            "culture_fit": 7,
            "relevance": 8,
            "experience": 7,
            "overall_score": 7.5
          }
        },
        {
          "question": "Can you provide an example of a significant achievement in your career?",
          "answer": "I led a project that increased efficiency by 30%, resulting in significant cost savings and improved customer satisfaction.",
          "score": {
            "positivity": 10,
            "culture_fit": 9,
            "relevance": 10,
            "experience": 9,
            "overall_score": 9.5
          }
        }
    ]);      

    
    useEffect(() => {
        if(props) {
            setData(props);
        }
    }, [props]);


    return (
        <div className="flex flex-col h-screen overflow-auto gap-16 pt-24">
            {/* Circular Progress Section */}
            <div className="flex flex-wrap justify-center gap-16 p-4">
                <CircularProgress
                    percent={50}
                    title="Face Emotion Analysis"
                />
                <CircularProgress
                    percent={70}
                    title="Voice Tone Analysis"
                />
                <CircularProgress
                    percent={90}
                    title="Answer Analysis"
                />
            </div>

            {/* Area Graph Section */}
            <div className="flex flex-wrap justify-center gap-24 p-4">
                <AreaGraph title="Face Emotion Analysis" />
                <AreaGraph title="Voice Tone Analysis" />
            </div>

            {/* Bar Graph Section */}
            <div className="flex justify-center">
                <BarGraph title="Overall Score" />
            </div>

            {/* QA Section */}
            <div className="flex flex-col p-4 gap-4">
                {data.map((index, key)=>(
                    <QA key={key} question={index.question} answer={index.answer} scores={index.score} />
                ))} 
            </div>
        </div>
    );
}
