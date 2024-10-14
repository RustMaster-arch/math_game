import Link from "next/link"

interface Props {
  difficulty: string,
  description: string,
  diffClass: string,
  className?: string,
  hideDescription?: boolean,
}

const Card = (props: Props) => {
  return (
    <div className={`border-b border-b-gray-700 m-6 pb-3 xs:grid xs:grid-cols-2
      xs:border-r xs:border-r-gray-700 xs:m-0 ${props.className} ${props.hideDescription ? 'mxl:flex mxl:flex-col' : ''}
        gap-y-4 hxl:flex hxl:flex-col`}>

      <p className="text-2xl text-white font-bold my-2 xs:text-3xl xs:[grid-column:1/2]">{props.difficulty}</p>

      <p className={`text-white xs:[grid-column:1/2] ${props.hideDescription ? 'max-hxl:hidden' : ''} mxl:[grid-column:1/3]
        text-left max-mxl:grid`}>

        {props.description}
      </p>

      <Link href={`/play/${props.diffClass}`} className='my-3 mr-3 xs:[grid-column:2/3] xs:[grid-row:1/2]
        '> 
        <button className={`w-full h-full my-3 pt rounded transition-all duration-300 hover:brightness-110
          ${props.diffClass}`}>

          Play now! 
        </button> 
      </Link>
    </div>
  )
}

export default Card
