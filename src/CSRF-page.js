import React from 'react';
import MCQ from './components/MCQ';
import CSRF from './Quizzes/CSRF';
import styled from 'styled-components';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

const Styles = styled.div`
  .embed {
    display: block;
    max-width: 720px;
    height: auto;
    margin: 3rem auto;
  }

  
`;


export const CSRFpage = () => (
  <Styles>
    <div class="embed">
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe title="CSRF Tutorial" src="https://www.youtube.com/embed/vRBihr41JTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </ResponsiveEmbed>  
    </div>
    <MCQ questions={CSRF.questions} />
  </Styles>
)