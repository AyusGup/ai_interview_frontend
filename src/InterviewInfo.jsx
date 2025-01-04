export default function InterviewInfo({role, date, status, link}) {
    
  return (
    <div className="bg-green-200 pt-20 rounded-md p-4">
        <div className="flex justify-between items-center flex-wrap">
            <span className="font-bold text-2xl">{role || "Software Developer Intern"}</span>
            <span>{date || "23-12-2004"}</span>
        </div>
        <p className={`${status==="Closed"? "text-red-500" : "text-green-500"}`}><span className="font-bold text-black">Status:</span> {status || "Open"}</p>
        <a href={link || "https://www.example.com"} className="text-blue-600" target="_blank" rel="noopener noreferrer">
            Link to Interview
        </a>
    </div>
  );
}