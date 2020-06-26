import React from 'react';
import MCQ from './components/MCQ';
import CSRF from './Quizzes/CSRF';

export const CSRFpage = () => (
  <React.Fragment>
    <iframe title="CSRF Tutorial" width="720" height="405" src="https://www.youtube.com/embed/UIwdCN4dV6w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <MCQ questions={CSRF.questions} />
  </React.Fragment>
)

//Idea here would be to create a module page with styling, then pass it XSS, SQL etc to link the appropriate video tutorial and MCQ questions. Means styling becomes very DRY.