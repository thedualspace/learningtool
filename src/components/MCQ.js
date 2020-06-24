import React from 'react';
import QuestionList from './QuestionList';

export class MCQ extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      questionNumber: 0,
      correctAnswers: 0,
      incorrectAnswers: 0
    }
  }

  render() {
    return (
      <QuestionList questions={this.props.questions} />
    )
  }
}

export default MCQ;