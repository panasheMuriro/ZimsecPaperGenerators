// components/Paper.tsx
import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import questionBank from "../data/questions.json";
import FrontPage from "./FrontPage";

function renderWithMath(input: string) {
  const parts = input.split(/(\$[^$]+\$)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("$") && part.endsWith("$")) {
      return <InlineMath key={idx}>{part.slice(1, -1)}</InlineMath>;
    }
    return (
      <React.Fragment key={idx}>
        {part
          .split("\n")
          .map((line, i) => (i === 0 ? line : [<br key={i} />, line]))}
      </React.Fragment>
    );
  });
}

type QObj = { question: string; explanation: string };

function pickRandom(category: number): QObj {
  const key = `possible_question_${category}` as keyof typeof questionBank;
  const pool = questionBank[key] as QObj[];
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}

function generatePaper() {
  const paper: Array<{ number: number } & QObj> = [];
  for (let i = 1; i <= 20; i++) paper.push({ number: i, ...pickRandom(i) });
  return paper;
}

export const Paper = React.forwardRef<HTMLDivElement>((_, ref) => {
  const paper = React.useMemo(() => generatePaper(), []);

  return (
    <div ref={ref}>
      <FrontPage />
      <div
        className="flex flex-col justify-start items-start p-12"
        style={{ fontFamily: "CModern", fontSize: 18 }}
      >
        {/* -------------  QUESTIONS ------------- */}
        <section className="text-start">
          <h2 className="font-bold mb-3 text-center mt-6">Answer all questions</h2>
          {paper.map(({ number, question }) => (
            <div key={`Q${number}`} className="mt-6">
              <h3>Question {number}</h3>
              <p>{renderWithMath(question)}</p>
              <div className="spacer h-[40vh]"></div>
              <div className="text-end mb-3">_____________________________</div>
              <div className="text-end mb-3">_____________________________</div>
              <div className="text-end mb-3">_____________________________</div>
            </div>
          ))}
        </section>

        {/* -------------  ANSWERS ------------- */}
        <section>
          <h2 className="text-xl font-bold text-center my-3">Answers and Explanations</h2>
          {paper.map(({ number, explanation }) => (
            <div key={`A${number}`}>
              <h3 className="font-bold">Answer {number}</h3>
              <p>{renderWithMath(explanation)}</p>
              <div className="spacer h-3"></div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
});
