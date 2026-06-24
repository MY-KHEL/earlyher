"use client";

import { Stethoscope } from "lucide-react";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [result, setResult] = useState<any>(null);
  const [aiResponse, setAIResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("formResult");

    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (!result) return;

    const fetchAIResponse = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/gemini", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answers: result,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }

        setAIResponse(String(data.riskScore));
        console.log(String(data.riskScore));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAIResponse();
    //   const interval = setInterval(() => {
    //   if (!aiResponse) {
    //     fetchAIResponse();
    //   }
    // }, 30000);

    // return () => clearInterval(interval);
  }, [result]);
  if (!result) return <p>No result found</p>;

  return (
    <div className=" mt-4 flex flex-col gap-10 items-center justify-center px-3">
      <h1 className="text-3xl font-bold text-center">
        Your Assessment Summary
      </h1>
      {error && (
        <p className="text-center text-md font-medium">
          This model is currently experiencing high demand. <br />{" "}
          <span className="text-[#453627] ">
            Kindly Refresh , your data is saved{" "}
          </span>
        </p>
      )}
{loading && 
<>
<span className="loader"></span>
<p className="text-md font-medium"> Please wait, Ai is generating your risk score</p>
</>
}

      {aiResponse && (
        <>
          <h1 className="text-center">
            Based on your responses , we have calculated your preliminary health
            risk factor. This is a personalized guide for your advocacy
          </h1>

          <div className="text-5xl font-bold w-40 flex flex-col justify-center items-center gap-2 aspect-square rounded-full relative bg-[#1a7a4a] text-white ">
            {aiResponse}%<p className="text-[16px]">Score</p>
          </div>
        </>
      )}
      <div className="w-full p-4 bg-[#1a7a4a] flex flex-col gap-6 rounded-md">
        <div className="flex items-center gap-4">
          <div className="bg-[#48956e] p-2 rounded-sm">
            <Stethoscope color="white" size={16}/>
          </div>
          <h2 className="text-white text-2xl font-semibold">Next Steps</h2>
        </div>
        <p className="text-white font-medium text-lg">We advise booking a professional consultation with a specialist within the next 30 days to review these findings in detail.</p>
        
        <button className="w-full text-white  bg-[#b7004d] rounded-md p-4">
            Email me my results
        </button>
        <button className="w-full text-white  border-white border-2 rounded-md p-4">
            Find a clinic near me
        </button>


      </div>
    </div>
  );
}
