import React from 'react';
import Question from './Question';
import MCQ from './MCQ';

export class QuestionList extends React.Component {
  setAnswerEvent(e) {
    console.log(e.target)
  }
  
  render() {
    return (
      <form onSubmit={this.setAnswerEvent}>
        <div className="QuestionList">
          {
            this.props.questions.map( question => {
              return <Question
                key={question.key}
                question={question}
              />
            })
          }
        </div>
        <button className='MCQ-submit' type='submit'>
          Submit
        </button>
      </form>
    )
  }
}

export default QuestionList;