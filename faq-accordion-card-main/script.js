const liContainer = document.querySelector(".li-container");

const fAQS = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan.There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space..",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you",
  },
  {
    question: " Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: " Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours",
  },
];

fAQS.forEach((item) => {
  const newLi = document.createElement("li");
  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");
  const question = document.createElement("p");
  question.textContent = item.question;
  const downArrow = document.createElement("img");
  downArrow.setAttribute("src", "images/icon-arrow-down.svg");
  downArrow.setAttribute("alt", "icon arrow down");
  const answerContainer = document.createElement("div");
  answerContainer.classList.add("answer-container", "hide");
  const answer = document.createElement("p");
  answer.textContent = item.answer;
  questionContainer.append(question, downArrow);
  answerContainer.append(answer);
  newLi.append(questionContainer, answerContainer);
  liContainer.append(newLi);
});

const closeAnswers = () => {
  const answers = document.querySelectorAll(".answer-container");
  answers.forEach((item) => item.classList.add("hide"));
};

liContainer.addEventListener("click", (e) => {
  if (e.target.localName === "p" || e.target.localName === "img") {
    closeAnswers();
    e.target.parentNode.nextSibling.classList.remove("hide");
  }
  if (e.target.classList.contains("question-container")) {
    closeAnswers();
    e.target.nextSibling.classList.remove("hide");
  }
});
