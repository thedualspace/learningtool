import React from 'react';
import MCQ from './MCQ';
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


export class ModuleLayout extends React.Component{
  render () {
    return ( 
      <Styles>
        <div class="embed">
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe title={this.props.quiz.videoTitle} src={this.props.quiz.videoSrc} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </ResponsiveEmbed>  
        </div>
        <MCQ questions={this.props.quiz.questions} />
      </Styles>
    )
  }
}