import Image from "next/image"

const NavBar = () => {
  return (
    <section className="w-screen overflow-hidden">

      <div className="block">
        <div className="block">

          <li>
            <Image src={"/icons/Logo.jpeg"} alt="logo" width={38} height={38} className=""/>
            <h1 className="text-3xl font-bold text-white ">MathGame</h1>

            <p className="text-white">leaderBoard</p>
          </li>

        </div>
      </div>

    </section>
  )
}

export default NavBar
