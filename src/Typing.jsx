import TypeIt from "typeit-react";

export default () => {
  return (
    <div >
      <h1 className="text-6xl font-bold">Accelerate Your</h1>
      <TypeIt
        options={{
          strings: ["Hiring", "Interviewing", "Onboarding"], // Words to type in sequence
          speed: 100, 
          waitUntilVisible: true,
          loop: true, 
          deleteSpeed: 50, 
          nextStringDelay: 1000, 
          cursor: true, 
          breakLines: false, 
        }}

        className="text-5xl font-bold"
      />

      <p className="text-xl font-bold mt-8">An AI-driven, highly personalized interview process that adapts to each candidate's skills, experience, and personality.</p>
      <button className="px-4 py-2 bg-yellow-500 rounded-xl mt-6 border border-gray-300">Get started</button>
    </div>
  );
};
