import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Overview from './Overview.jsx'
import ReviewsSummary from './ReviewsSummary.jsx'
import PreviewRating from './PreviewRating.jsx'

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      overview: {}}
  }

  componentDidMount() {
    axios.get(`/api/reviews/${this.props.listing}`) 
    .then((results) => {
      console.log(results)
      const {reviews, ...rest} = results.data;
      this.setState({
        reviews: reviews,
        overview: rest});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Wrapper>
        <Overview overview={this.state.overview} />
        <PreviewRating overview={this.state.overview} />
        <ReviewsSummary reviews={this.state.reviews.slice(0,6)} />
      </Wrapper>
    )
  }
}

export default App;
