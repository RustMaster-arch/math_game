'use client'
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

interface Props {
  points: number,
}

const StatsDisplayer = (props: Props) => {
  const router = useRouter();
  function redi() {
    router.push("/");
  }
  return (
    <div className="bg-blue-950 rounded p-3 m-3 text-center">
      <h1 className="pt text-5xl">Now you have {props.points} points</h1>
      <Button className="m-3 bg-gray-800 text-3xl" onClick={redi}>Go to menu</Button>
    </div>
  )
}

export default StatsDisplayer
