// const possible_question_1 = [
//   "(a) Express $4380\\,\\text{cm}^3$ in litres.\n(b) Round $0.009684$ to two significant figures.\n(c) Write $5.27 \\times 10^4$ in ordinary form.",
//   "(a) Write $0.000312$ in standard form.\n(b) Express $7.56 \\times 10^5$ in full notation.\n(c) Find $12\\%$ of \\$2500.",
//   "(a) Round $347.289$ to THREE significant figures.\n(b) Express $1\\,\\text{h}\\;37\\,\\text{min}$ as a decimal of an hour correct to $2$ d.p.\n(c) Write $62\\,700\\,000$ in standard form.",
//   "(a) Express $480$ as a product of its prime factors in index form.\n(b) Simplify $\\sqrt{200}$ leaving the answer in the form $k\\sqrt{n}$.\n(c) Evaluate $(0.3)^2$, giving the answer as an exact decimal.",
//   "(a) Convert $2.5\\,\\text{m}^2$ to $\\text{cm}^2$.\n(b) Express $1\\dfrac{3}{8}$ as a recurring decimal.\n(c) Round $58\\,729$ to the nearest hundred.",
// ];

// const { possible_question_1 }=require("./question1");

const container = document.getElementById("questions");

possible_question_1.forEach((q, i) => {
  const div = document.createElement("div");
  div.className = "question";

  // Split into parts by line breaks
  const parts = q
    .split("\n")
    .map((p) => `<li>${p}</li>`)
    .join("");

  div.innerHTML = `<strong>Variant ${i + 1}</strong><ul>${parts}</ul>`;
  container.appendChild(div);
});

// Run KaTeX auto-render AFTER injecting HTML
document.addEventListener("DOMContentLoaded", () => {
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$", right: "$", display: false },
      { left: "$$", right: "$$", display: true },
    ],
  });
});
