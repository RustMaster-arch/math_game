import QuestionDisplayer from "@/components/QuestionDisplayer";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface Questions {
  question: string,
  answers: string[],
}

async function questions(difficulty: string): Promise<Questions[]> {
  const response = await fetch(`http://backend-production-c8e4.up.railway.app/${difficulty}`, {
    cache: "no-store",
    method: "GET",
  });

  return response.json();
}

const page = async ({ params }: {params: {difficulty: string}}) => {
  const res = await questions(params.difficulty);
  const clerkUser = await currentUser();
  if (clerkUser === null) {
    redirect("/sign-in")
  }
  console.log(res);

  return (
    <>
      <div className="some flex flex-col h-full">
          <QuestionDisplayer questions={res} difficulty={params.difficulty} user_id={clerkUser.id}/>
      </div>
    </>
  )
}

export default page
