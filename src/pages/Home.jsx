import { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="glass-card p-6">
        <h2 className="text-xl mb-4">Upload Content</h2>

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Paste your text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="bg-blue-600 text-white p-2 rounded">
            Explain
          </button>
          <button className="bg-green-600 text-white p-2 rounded">
            Summarize
          </button>
          <button className="bg-purple-600 text-white p-2 rounded">
            Flashcards
          </button>
          <button className="bg-yellow-500 text-white p-2 rounded">
            Exams
          </button>
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl mb-4">Ask AI</h2>

        <div className="h-40 bg-gray-100 rounded p-2 mb-3">
          AI chat هنا لاحقاً
        </div>

        <input
          className="w-full border p-2 rounded"
          placeholder="Ask anything..."
        />
      </div>

    </div>
  );
}

export default Home;