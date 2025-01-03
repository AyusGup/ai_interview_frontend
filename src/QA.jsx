export default function QA({ question, answer, scores }) {
    return (
        <div className="rounded-xl border p-6">
            <p>Question: {question}</p>
            <p>Response: {answer}</p>
            <div className="flex flex-wrap gap-4 mt-4">
                <span className="rounded-xl font-bold border border-gray-300 p-2">Positivity: {scores.positivity}</span>
                <span className="rounded-xl font-bold border border-gray-300 p-2">Culture Fit: {scores.culture_fit}</span>
                <span className="rounded-xl font-bold border border-gray-300 p-2">Relevance: {scores.relevance}</span>
                <span className="rounded-xl font-bold border border-gray-300 p-2">Experience: {scores.experience}</span>
                <span className="rounded-xl font-bold border border-gray-300 p-2">Overall Score: {scores.overall_score}</span>
            </div>
        </div>
    );
}