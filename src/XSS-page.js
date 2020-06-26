import React from 'react';
import MCQ from './components/MCQ';
import XSS from './Quizzes/XSS';

export const XSSpage = () => (
  <React.Fragment>
    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls>Example</video>
    <MCQ questions={XSS.questions} />
  </React.Fragment>
)