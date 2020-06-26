import React from 'react';
import MCQ from './components/MCQ';
import NOSQL from './Quizzes/NOSQL';

export const NOSQLpage = () => (
  <React.Fragment>
    <iframe title="NOSQL Tutorial" width="720" height="405" src="https://www.youtube.com/embed/h0h37-Dwd_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <MCQ questions={NOSQL.questions} />
  </React.Fragment>
)