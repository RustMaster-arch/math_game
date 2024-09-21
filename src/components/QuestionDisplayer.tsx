"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  question: string,
  answers: string[],
}

interface Props {
  questions: Question[],
  difficulty: string,
  user_id: string,
}

const accents = [
  "bg-[#00A8E8]", 
  "bg-[#9A57D3]",
  "bg-[#4CAF50]",
  "bg-[#FF8C00]",
];

async function correct(difficulty: string, answerIndex: number, questionIndex: number, user_id: string): Promise<boolean> {
  console.log("calling back-end");
  const response = await fetch(`http://localhost:8080/correct?question_index=${questionIndex}&difficulty=${difficulty}&answer_index=${answerIndex}&user_id=${user_id}`);
  return response.json();
}

const QuestionDisplayer = (props: Props) => {
  const [index, setIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const router = useRouter();

  const indexHandler = () => {
    if (index === props.questions.length - 1) {
      console.log("executed");
      setSelectedAnswerIndex(null);
      setIsCorrect(null);
      router.push("/result");
      return;
    }
    setSelectedAnswerIndex(null);
    setIsCorrect(null);
    setIndex(index + 1);
  }

  useEffect(() => {
    if (isCorrect) {
      console.log("correct answers now will be: " + (correctAnswers + 1));
      setCorrectAnswers(correctAnswers + 1);
      return
    }
  }, [isCorrect])
  
  const correctHandler = async (difficulty: string, questionIndex: number, answerIndex: number) => {
    const res = await correct(difficulty, answerIndex, questionIndex, props.user_id);
    setSelectedAnswerIndex(answerIndex); 
    if (res === true) {
      setIsCorrect(true);
      setTimeout(() => indexHandler(), 1000);
      return;
    }
    setIsCorrect(false);
    setTimeout(() => indexHandler(), 1000);
  }

  const accentColor = accents[index % accents.length];

  return (
    <div className="flex justify-center items-center flex-col w-full h-full">
      <div className="p-4 text-center w-full min-h-36 flex justify-center items-center">
        <h3 className={`pt text-2xl border rounded p-2 bc w-full`}>
          {props.questions[index].question}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3 grow w-full">
        {props.questions[index].answers.map((answer, answerIndex) => (
          <div key={answerIndex} className="w-full">
            <button
              className={`text-white text-2xl rounded ${accentColor} ${
selectedAnswerIndex === answerIndex ? isCorrect ? "bg-gradient-to-r from-green-500 to-green-700 transition animate-pulse" :
"bg-gradient-to-r from-red-500 to-red-700 transition animate-pulse" : ""} w-full h-full`}
              onClick={async () => await correctHandler(props.difficulty, index, answerIndex)}
            >
              {answer}
            </button>
            {selectedAnswerIndex === answerIndex ? isCorrect ? <h1 className="pt">yeah you got it</h1> : <h1 className="pt">you gotta practice more</h1> : <></>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionDisplayer;

