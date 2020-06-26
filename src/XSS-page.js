import React from 'react';
import MCQ from './components/MCQ';
import XSS from './Quizzes/XSS';

export const XSSpage = () => (
  <React.Fragment>
    <iframe title="XSS Tutorial" class="xss-tutorial" width="720" height="405" src="https://www.youtube.com/embed/eymxlggL9EQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <MCQ questions={XSS.questions} />
  </React.Fragment>
)