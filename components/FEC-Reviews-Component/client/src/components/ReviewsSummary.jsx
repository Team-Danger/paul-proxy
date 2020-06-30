import React from 'react';
import styled from 'styled-components';

import PreviewEntry from './PreviewEntry.jsx'

const ReviewSummaryStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto)
`
const ReviewsSummary = (props) => {
  const { reviews } = props;

  return (
    <ReviewSummaryStyle>
      {reviews.map((review, idx) => (
        <div key={`${review.date}${idx}`}>
          <PreviewEntry review={review} idx={idx}/>
        </div>
      ))}   
    </ReviewSummaryStyle>
  )
}

export default ReviewsSummary;
