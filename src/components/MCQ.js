import React from 'react';
import QuestionList from './QuestionList';
import styled from 'styled-components';

const Styles = styled.div`
  .Question-prompt {
    color: red;
  }
`;

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
      <Styles>
        <QuestionList questions={this.props.questions} />
      </Styles>
    )
  }
}

export default MCQ;