import { useState } from "react";
import Form from "./Form";
import Display from "./Display";

export default function Layout() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen p-10">
      <div className="mica w-full max-w-2xl p-8">
        <h1 className="text-4xl font-bold text-yellow-400 neon-title mb-6 text-center">
          Enter Your Details
        </h1>
        <Form onSubmit={setSubmittedData} />
        {submittedData && <Display data={submittedData} />}
      </div>
    </div>
  );
}
