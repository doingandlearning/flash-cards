export default function Card({ question, onCorrect, onWrong }) {
  const [correct, setCorrect] = React.useState(false);
  const [inView, setInView] = React.useState(true);

  return (
    <div className={`flex flex-wrap border m-4 p-4`}>
      <div className={`flex-grow-0 w-1/2  ${inView ? "invisible" : ""}`}>
        <span
          className="block w-40 h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${question.image})` }}
        >
          <span className="sr-only">Image of {question.character}</span>
        </span>
        <p className="text-center text-2xl ">{question.character}</p>
      </div>
      <div className="text-center flex flex-col justify-between relative text-2xl w-1/2 p-2">
        <p>"{question.quote}"</p>
        {inView && (
          <button
            className="absolute right-0 bottom-0 bg-green-200 p-2 rounded-lg border border-blue-200"
            onClick={() => setInView(!inView)}
          >
            Guess
          </button>
        )}
      </div>
      {!inView && (
        <div className="w-full flex justify-center">
          <button
            className="bg-green-200 p-2 m-1 rounded-lg border border-blue-200 w-1/2"
            onClick={onCorrect}
          >
            I got it!
          </button>
          <button
            className="bg-red-200 p-2 m-1 rounded-lg border border-blue-200 w-1/2"
            onClick={onWrong}
          >
            Not this time :(
          </button>
        </div>
      )}
    </div>
  );
}
