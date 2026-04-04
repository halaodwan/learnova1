import { useState } from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";


import FlashcardItem from "./components/FlashcardItem";
import Controls from "./components/Controls";
import CardCounter from "./components/CardCounter";


const sampleCards = [
  { q: "What is DNS?", a: "DNS (Domain Name System) is a system that translates easy-to-remember domain names like google.com into numerical IP addresses like142.250.190.78 In short, it’s the (internet phonebook) that helps your browser find the correct website without remembering complex numbers." },
  { q: "What does HTTP stand for?", a: "The HyperText Transfer Protocol." },
  { q: "Define a Server:", a: "A Server is a computer that provides data, resources, or services to other computers over a network." },
  { q: "What is JavaScript used to?", a: "Making web pages interactive." },
  { q: "What is a DataBase used for?", a: "Stong and managing data for websites or application." },
];


const previousSets = [
  { title: "Backend Ch. 3", count: 12, date: "Feb 28" },
  { title: "Frontend", count: 8, date: "Feb 25" },
  { title: "DataBase", count: 20, date: "Feb 22" },
];

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const goNext = () => {
    setFlipped(false);
    setCurrentIndex((i) => Math.min(i + 1, sampleCards.length - 1));
  };

  const goPrev = () => {
    setFlipped(false);
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  const card = sampleCards[currentIndex];

  return (
    <div className="max-w-2xl mx-auto animate-fade-in p-4">

      
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">🃏 Flashcards</h1>

        <Link to="/">
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors">
            <Home className="w-4 h-4" /> Back to Home
          </button>
        </Link>
      </div>

      <CardCounter
        current={currentIndex + 1}
        total={sampleCards.length}
      />

      
      <FlashcardItem
        card={card}
        flipped={flipped}
        setFlipped={setFlipped}
      />

      
      <Controls
        goPrev={goPrev}
        goNext={goNext}
        resetFlip={() => setFlipped(false)}
        disablePrev={currentIndex === 0}
        disableNext={currentIndex === sampleCards.length - 1}
      />

      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          📚 Previous Flashcard Sets
        </h3>

        <div className="space-y-2">
          {previousSets.map((set) => (
            <div
              key={set.title}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {set.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {set.count} cards
                </p>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {set.date}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Flashcards;