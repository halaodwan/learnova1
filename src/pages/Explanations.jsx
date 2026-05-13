import { Home, ArrowRightLeft, Lightbulb, History } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const sampleExplanation = 'explanation content';

const sampleSummary = 'summary content';

const previousItems = [
  { title: " Explain", type: "Explanation", date: "Feb 28" },
  { title: "Summary", type: "Summary", date: "Feb 26" },
  { title: "Explained", type: "Explanation", date: "Feb 24" },
];

const Explanations = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get("mode") || "explanation";

  const content = mode === "explanation" ? sampleExplanation : sampleSummary;

  return (
    <>
      <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl">📖 Shorhat / Takhlisat</h1>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setSearchParams({ mode: "explanation" })}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "explanation" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary"
            }`}
          >
            Explanation
          </button>
          <button
            onClick={() => setSearchParams({ mode: "summary" })}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "summary" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary"
            }`}
          >
            Summary
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-card rounded-xl p-6 mb-5"
          >
            <h3 className="text-lg mb-3 capitalize">{mode}: example</h3>
            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line text-sm leading-relaxed">
              {content}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() =>
              setSearchParams({
                mode: mode === "explanation" ? "summary" : "explanation",
              })
            }
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-edu-info text-edu-info-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowRightLeft className="w-4 h-4" />
            Convert to {mode === "explanation" ? "Summary" : "Explanation"}
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-edu-warning text-edu-warning-foreground font-medium text-sm hover:opacity-90 transition-opacity">
            <Lightbulb className="w-4 h-4" />
            Explain Simpler
          </button>
        </div>

        <div className="glass-card rounded-xl p-5">
          <h3 className="text-lg mb-3 flex items-center gap-2">
            <History className="w-5 h-5 text-muted-foreground" />
            Previous Content
          </h3>
          <div className="space-y-2">
            {previousItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.type}</p>
                </div>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explanations;