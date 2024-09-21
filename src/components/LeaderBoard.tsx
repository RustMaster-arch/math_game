interface LeaderBoardUser {
  user_name: string,
  points: number,
}

const getLeaderBoard = async (): Promise<LeaderBoardUser[]> => {
  const response = await fetch(`https://backend-production-c8e4.up.railway.app/user/leader_board`);
  return response.json()
}

const LeaderBoard = async () => {
  const leaderBoard = await getLeaderBoard();

  return (
    <div className="bg-gray-800 flex flex-col">
      {leaderBoard.map(leader => (
        <div className="bg-gray-800 flex flex-row justify-around items-center" key={leader.user_name}>
          <p className="pt">{leader.user_name}</p>
          <p className="st">{leader.points}</p>
        </div>
      ))}
    </div>
  )
}

export default LeaderBoard
