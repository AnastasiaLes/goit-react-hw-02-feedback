import React from 'react';
import { nanoid } from 'nanoid';
import { Capitalized } from './Button.styled';

import { FeedbackButtons, FeedbackButton } from '../App/App.styled';

export const Controls = ({ options, handleFeedback }) => (
  <FeedbackButtons>
    {options.map(option => (
      // console.log(option);
      <FeedbackButton key={nanoid()} type="button" onClick={handleFeedback}>
        <Capitalized>{option}</Capitalized>
      </FeedbackButton>
    ))}
  </FeedbackButtons>
);
