import React from 'react';
import MCQ from './components/MCQ';
import SQL from './Quizzes/SQL';

export const SQLpage = () => (
  <React.Fragment>
    <iframe title="SQL Tutorial" width="720" height="405" src="https://www.youtube.com/embed/1GJP_drZFa0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <MCQ questions={SQL.questions} />
  </React.Fragment>
)