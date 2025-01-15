import MouseAndCheese from '../assets/MouseAndCheese'

export default function EnterNameForm() {
  const buttonStyling: string = `flex justify-center items-center content-center text-5xl h-16 w-16 rounded-full bg-red-600 border-2 border-black grid-col-1`
  return (
    <div className='flex flex-col items-center space-y-12 pt-12 px-48'>
      <p className='font-irishGrover italic text-white text-8xl font-normal border-[#3700FF] border-8 bg-[#D9D9D9] rounded-full w-[45rem] h-20 leading-10'>Your name...</p>

      <div className='grid grid-cols-10 gap-6 gap-y-12'>
        <p className={`${buttonStyling} col-start-2`}>Z</p>
        <p className={`${buttonStyling}`}>M</p>
        <p className={`${buttonStyling}`}>F</p>
        <p className={`${buttonStyling}`}>W</p>
        <p className={`${buttonStyling}`}>N</p>
        <p className={`${buttonStyling}`}>Y</p>
        <p className={`${buttonStyling}`}>A</p>
        <p className={`${buttonStyling}`}>Q</p>
        <p className={`${buttonStyling} col-start-1`}>B</p>
        <p className={`${buttonStyling}`}>P</p>
        <p className={`${buttonStyling}`}>S</p>
        <p className={`${buttonStyling}`}>U</p>
        <p className={`${buttonStyling}`}>G</p>
        <p className={`${buttonStyling}`}>J</p>
        <p className={`${buttonStyling}`}>K</p>
        <p className={`${buttonStyling}`}>L</p>
        <p className={`${buttonStyling}`}>X</p>
        <p className={`${buttonStyling}`}>T</p>
        <p className={`${buttonStyling} col-start-2`}>R</p>
        <p className={`${buttonStyling}`}>I</p>
        <p className={`${buttonStyling}`}>C</p>
        <p className={`${buttonStyling}`}>O</p>
        <p className={`${buttonStyling}`}>E</p>
        <p className={`${buttonStyling}`}>H</p>
        <p className={`${buttonStyling}`}>←</p>
        <p className={`${buttonStyling}`}>V</p>
      </div>

      <MouseAndCheese className="ml-auto" />

      <div className='flex flex-row items-center space-x-4'>
        <div className='h-content w-content p-2 bg-black/50  rounded-full shadow-3xl'>
          <div className='h-16 w-16 bg-[#FF00C8] shadow-3xl rounded-full'></div>
        </div>
        <p className='font-concertOne font-normal text-2xl'>Gooi mij :)</p>
      </div>

    </div>
  )
}
