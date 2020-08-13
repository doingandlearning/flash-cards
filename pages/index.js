import Layout from "../components/layout";
import Card from "../components/Card";
import questions from "./questions.json";

function IndexPage() {
  const defaultPossible = questions.map((question) => question.id);

  const [state, updateState] = React.useState({});

  const [possibleQuestions, setPossibleQuestions] = React.useState(
    defaultPossible
  );
  console.log("possibleQuestions", possibleQuestions);

  const [currentQuestion, setCurrentQuestion] = React.useState(
    Math.floor(Math.random() * questions.length)
  );

  const selectQuestion = (possibleQuestions) => {
    const length = possibleQuestions.length;
    return Math.floor(Math.random() * length);
  };

  const mappedQuestions = questions.map((question) => {
    const { id } = question;
    const questionState = state[id] || "wrong";
    return {
      ...question,
      state: questionState,
    };
  });
  console.log(mappedQuestions);

  function handleOnCorrect(id) {
    // const index = possibleQuestions.findIndex(question => id === question.id);
    const questionsCleaned = possibleQuestions.filter(
      (questionId) => id !== questionId
    );

    setPossibleQuestions(questionsCleaned);
    setCurrentQuestion(selectQuestion(questionsCleaned));
  }

  function handleOnWrong(id) {
    setCurrentQuestion(selectQuestion(possibleQuestions));
  }
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <ul>
          {mappedQuestions
            .filter((question) => question.id === currentQuestion)
            .map((question) => {
              const { id } = question;
              return (
                <li key={id}>
                  <Card
                    question={question}
                    onCorrect={() => handleOnCorrect(id)}
                    onWrong={() => handleOnWrong(id)}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </Layout>
  );
}

export default IndexPage;
