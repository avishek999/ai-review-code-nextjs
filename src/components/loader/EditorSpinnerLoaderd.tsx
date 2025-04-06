import React from "react";

const EditorSpinnerLoaderd = () => {
  return (
    <div className=" bg-[var(--primary-background-color)] flex items-center justify-center relative overflow-hidden h-full">
      {/* Terminal-like background effect */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-20">
        <div className="terminal-text font-mono text-xs text-green-500 overflow-hidden h-40">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="terminal-line">
              <span className="text-blue-400">$</span>{" "}
              {i % 3 === 0
                ? "Loading modules..."
                : i % 3 === 1
                ? "Initializing editor..."
                : "Preparing workspace..."}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 bg-zinc-900/90 p-8 rounded-lg border border-zinc-800 shadow-lg">
        <div className="editor-icon relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
          <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-zinc-800 rounded-full border-2 border-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
          </div>
        </div>

        <div className="space-y-3 text-center">
          <p className="text-zinc-300">Loading code editor...</p>
          <div className="flex items-center justify-center gap-1">
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </div>
          <div className="w-56 h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary loading-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorSpinnerLoaderd;
