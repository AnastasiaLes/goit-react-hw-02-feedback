import React from 'react';
import { FeedbackButtons, FeedbackButton } from '../App/App.styled';

export const Controls = ({ onGood, onNeutral, onBad }) => (
  <FeedbackButtons>
    <FeedbackButton type="button" onClick={onGood}>
      Good
    </FeedbackButton>
    <FeedbackButton type="button" onClick={onNeutral}>
      Neutral
    </FeedbackButton>
    <FeedbackButton type="button" onClick={onBad}>
      Bad
    </FeedbackButton>
  </FeedbackButtons>
);
