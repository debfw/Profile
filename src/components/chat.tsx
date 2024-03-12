import React, { useEffect, useState } from "react";

export function Chat() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/openai", {
          method: "POST",
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content:
                  "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.",
              },
              {
                role: "user",
                content:
                  "Compose a poem that explains the concept of recursion in programming.",
              },
            ],
          }),
        });
        const data = await response.json();
        console.log(data);
        if (data.choices && data.choices.length > 0) {
          setResponse(data.choices[0].text);
        } else {
          setResponse("No response data found.");
        }
      } catch (error) {
        console.error("Error:", error);
        setResponse("Error fetching data.");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>OpenAI </h1>
      <p>{response}</p>
    </div>
  );
}
