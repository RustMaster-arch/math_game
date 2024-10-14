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
  const response = await fetch(`https://backend-production-c8e4.up.railway.app/correct?question_index=${questionIndex}&difficulty=${difficulty}&answer_index=${answerIndex}&user_id=${user_id}`, {
    cache: "no-store",
    method: "GET",
  });
  return response.json();
}

const QuestionDisplayer = (props: Props) => {
  const [index, setIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [solved, setSolved] = useState<boolean | null>(false)
  const router = useRouter();

  const indexHandler = () => {
    if (index === props.questions.length - 1) {
      console.log("executed");
      setSelectedAnswerIndex(null);
      setSolved(null);
      router.push("/result");
      return;
    }
    setSelectedAnswerIndex(null);
    setSolved(null);
    setIndex(index + 1);
  }

  useEffect(() => {
    if (solved) {
      console.log("correct answers now will be: " + (correctAnswers + 1));
      setCorrectAnswers(correctAnswers + 1);
      return
    }
  }, [solved])
  
  const correctHandler = async (difficulty: string, questionIndex: number, answerIndex: number) => {
    const res = await correct(difficulty, answerIndex, questionIndex, props.user_id);
    setSelectedAnswerIndex(answerIndex); 
    if (res === true) {
      setSolved(true);
      setTimeout(() => indexHandler(), 2000);
      return;
    }
    setSolved(false);
    setTimeout(() => indexHandler(), 2000);
  }

  const accentColor = accents[index % accents.length];

  const handleOnSubmit = async (answerIndex: number) => {
    if (solved) return;
    try {
      setSolved(true)
      await correctHandler(props.difficulty, index, answerIndex)
    } catch (error) {
      setSolved(false)
    }
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-full text-center">
        <div className="p-4 text-center w-full min-h-36 flex justify-center items-center">
          <h3 className={`pt text-2xl border rounded p-2 bc w-full`}>
            {props.questions[index].question}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 grow w-full">
          {props.questions[index].answers.map((answer, answerIndex) => (
            <>
              <div key={answerIndex} className="w-full transition-all">
                <button
                  className={`text-white text-3xl rounded ${accentColor} ${
selectedAnswerIndex === answerIndex ? solved ? "bg-gradient-to-r from-green-500 to-green-600" :
"bg-gradient-to-r from-red-500 to-red-600" : ""} w-full h-full transition-all duration-300 hover:brightness-110`}
                  onClick={() => handleOnSubmit(answerIndex)}
                >
                  {answer}
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className={`flex text-start ${solved === true ? "bg-green-700" : solved === false ? "bg-red-700" : <></>} rounded my-3`}>
        <h1 className="pt">Answer: </h1>

        {solved === true ? 
          <h1 className="pt">V yeah you got it</h1> :
          solved === false ? <h1 className="pt">X You gotta practice more</h1> : <></>}
      </div>
    </>
  );
}

export default QuestionDisplayer;

