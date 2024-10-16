interface LeaderBoardUser {
  user_name: string,
  points: number,
}

const getLeaderBoard = async (): Promise<LeaderBoardUser[]> => {
  const response = await fetch(`https://backend-production-c8e4.up.railway.app/user/leader_board`, {
    cache: 'no-store',
    method: 'GET'
  });
  return response.json()
}

const LeaderBoard = async () => {
  const leaderBoard = await getLeaderBoard();

  return (
    <>
      <div className="mx-3 flex flex-col xs:col-span-full mxl:[grid-column:1/4] mxl:[grid-row:1/3] hxl:[grid-column:1/3]">
        <p className="pt my-3 colorS">Leader Board</p>
        {leaderBoard.map(leader => (
          <div className="color border border-gray-950 flex flex-row justify-around items-center" key={leader.user_name}>
            <p className="pt">{leader.user_name}</p>
            <p className="st">{leader.points}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default LeaderBoard
