import React from 'react';
import styled from 'styled-components';

const OverviewWrapper = styled.div`
  font-size: 1.5em;
  font-weight: bolder;
`

class Overview extends React.Component {
  render() {
    return (
      <OverviewWrapper>
          {this.props.overview.avg} ({this.props.overview.reviewSize} reviews)
      </OverviewWrapper>
    )
  }
}

export default Overview;