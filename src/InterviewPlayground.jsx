import { useState, useEffect } from 'react';

export default function InterviewPlayground({ props }) {
    const [InterviewLink, setInterviewLink] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState([]);
    const [addedQuestion, setAddedQuestion] = useState([]);
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

    function addQuestion(e){
        e.preventDefault();
        const question = e.target[0].value;
        setAddedQuestion([...addedQuestion, {question: question}]);
        e.target[0].value = '';
    }

    function selectQuestion(e, index, type){
        e.preventDefault();
        if(type === 2){
            setAddedQuestion(addedQuestion.filter((item, key) => key !== index));
        }
        else if(type === 1){
            const question = selectedQuestion[index];
            setData([...data, question]);
            setSelectedQuestion(selectedQuestion.filter((item, key) => key !== index));
        }
        else{
            const question = data[index];
            setSelectedQuestion([...selectedQuestion, question]);
            setData(data.filter((item, key) => key !== index));
        }
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4 px-4 pt-24'>
            <div className='w-full flex flex-wrap p-4 justify-between items-center gap-4'>
                <div className='rounded-md w-full lg:w-2/5 h-96 overflow-y-auto flex flex-col gap-2 p-4 bg-gray-200'>
                    <p className='text-center font-bold text-xl'>Available Questions</p>
                    {data.map((item, key) => (
                       <form onSubmit={(e) => selectQuestion(e, key, 0)}>
                        <span key={key} className='p-2'>Q{key+1} : {item.question}</span>
                        <button className='px-1 rounded-md bg-blue-400'>select</button>
                       </form>
                    ))}
                </div>

                <div className='rounded-md w-full lg:w-2/5 h-96 flex flex-col gap-2 p-4 bg-gray-200'>
                    <p className='text-center font-bold text-xl'>Selected Questions</p>
                    {selectedQuestion.map((item, key) => (
                        <form onSubmit={(e) => selectQuestion(e, key, 1)}>
                            <span key={key} className='p-2'>Q{key+1} : {item.question}</span>
                            <button className='px-1 rounded-md bg-red-500'>reject</button>
                       </form>
                    ))}

                    {addedQuestion.map((item, key) => (
                        <form onSubmit={(e) => selectQuestion(e, key, 2)}>
                            <span key={selectedQuestion.length + key} className='p-2'>Q{selectedQuestion.length+key+1} : {item.question}</span>
                            <button className='px-1 rounded-md bg-pink-500'>discard</button>
                       </form>
                    ))}
                </div>
            </div>

            <form className='w-full flex flex-wrap justify-center items-center gap-2' onSubmit={(e) => {
               addQuestion(e);
            }}>
                <input className='w-3/4 h-10 rounded-md bg-gray-200 p-2' placeholder='Enter your question here' />
                <button className="w-1/5 px-4 py-2 bg-yellow-500 rounded-xl border border-gray-300">Add your question</button>
            </form>

            <button className="w-1/2 px-4 py-2 bg-yellow-500 rounded-xl border border-gray-300">Create</button>

            {InterviewLink? <p className='w-4/5 p-4 rounded-md bg-gray-200'>{InterviewLink}</p> : <></>}
        </div>
    );
}