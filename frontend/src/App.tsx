import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./assets/fonts/font.css";
import { Paper } from "./components/Paper";
import { FileText } from "lucide-react";

const colors = {
  primary: "#3d405b",
  secondary: "#e07a5f",
  tertiary: "#f2cc8f",
  accent: "#81b29a",
  background: "#f4f1de",
};

const App = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 font-inter"
      style={{ backgroundColor: colors.background }}
    >
      <div
        className="
          max-w-4xl w-full mx-auto
          bg-white p-8 md:p-12 lg:p-16
          rounded-xl shadow-2xl
          flex flex-col md:flex-row items-center
          space-y-8 md:space-y-0 md:space-x-12
          transform transition-all duration-500
          hover:scale-[1.01]
        "
      >
        <div className="flex-1 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            style={{ color: colors.primary }}
          >
            ZIMSEC Math Paper 1 Practice
          </h1>
          <p
            className="text-lg md:text-xl mb-8"
            style={{ color: colors.primary }}
          >
            Generate a free practice paper for ZIMSEC O-Level Mathematics Paper
            1. This resource is designed to help you prepare for your upcoming
            exams.
          </p>
          <button
            onClick={handlePrint}
            className={`
              px-8 py-4 font-bold text-lg rounded-full shadow-lg
              transition-all duration-300
              hover:shadow-xl hover:opacity-90
              focus:outline-none focus:ring-4 focus:ring-opacity-50
              text-white
              bg-secondary}
            `}
            style={{ backgroundColor: colors.secondary }}
          >
            Generate Paper 1
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div
            className="
              w-64 h-64 md:w-80 md:h-80
              rounded-full flex items-center justify-center shadow-lg
            "
            style={{ backgroundColor: colors.accent }}
          >
            <FileText size={160} style={{ color: colors.primary }} />
          </div>
        </div>
      </div>

      {/* This div contains the content to be printed. It is hidden on the screen but visible to the printer. */}
    
     {/* <div className="hidden print:block">
        <Paper ref={contentRef} />
      </div> */}

<div
 
  style={{
    position: "absolute",
    top: "-10000px",
    left: "-10000px",
  }}
>
  <Paper  ref={contentRef} />
</div>

    </div>
  );
};

export default App;
