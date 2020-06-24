import React from 'react';

export class Question extends React.Component{
  
  
  render() {
    return (
      <div className='Question'>
        <div className='Question-prompt'>
          <h3>{this.props.question.prompt}</h3>
        </div>
        <div className='Question-answers'>
          <label for='a'>a.)</label>
          <input type="radio" value={this.props.question.answer[0]} name={this.props.question.key} id='a' /> {this.props.question.answer[0]} <br/>
          <label for='a'>b.)</label>
          <input type="radio" value={this.props.question.answer[1]} name={this.props.question.key} id='b' /> {this.props.question.answer[1]} <br/>
          <label for='a'>c.)</label>
          <input type="radio" value={this.props.question.answer[2]} name={this.props.question.key} id='c' /> {this.props.question.answer[2]} <br/>
        </div>
      </div>
    )
  }
}

export default Question;


