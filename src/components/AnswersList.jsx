import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => {
       return ( <AnswersItem answerItem={answerItem} key={i} />)
      })}
    </ul>
  );
}
