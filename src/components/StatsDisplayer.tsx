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
    <div>
      <h1 className="pt">Now you have {props.points} points</h1>
      <Button className="m-3 bg-gray-400" onClick={redi}>Go to menu</Button>
    </div>
  )
}

export default StatsDisplayer
