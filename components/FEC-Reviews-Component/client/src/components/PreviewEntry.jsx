import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

// const BasicInfoStyle = styled.div`
//   display: flex;
//   flex-direction: column;
// `
// const AvatarStyle = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   flex-direction: column;
// `
// const DateStyle = styled.span`
//   color: #B3B3B3;
// `
// const BodyStyle = styled.div`
//   flex-direction: row;
// `
const Wrapper = styled.div`
  margin: 25px 50px 25px 50px;  
`
const TopStyle = styled.div`
  display: flex;
`
const AvatarStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-direction: column;
`
const TopText = styled.div`
  flex-direction: row
`
const Date = styled.span`
  color: #B3B3B3;
`
class PreviewEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      readMore: null,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { review } = this.props;
    const { body } = review;

    if (review.body.length > 180) {
      this.setState({
        readMore: true,
        display: body.slice(0,180)
      })
    } else {
      this.setState({
        readMore: false,
        display: body
      })
    }
  }

  handleClick() {
    const { review } = this.props;
    const { body } = review;

    this.setState({
      readMore: false,
      display: body
    })
  }

  render() {
    const { review, idx } = this.props;
    const imageURL = `https://dteamdp.s3-us-west-2.amazonaws.com/pug${review.dp}.jpg`
    const date = moment(review.date).format('MMMM YYYY');

    if(this.state.readMore) {
      return(
        <Wrapper>
          <TopStyle>
            <AvatarStyle src={imageURL} />
            <TopText>
              {review.reviewer_name}
              <br></br>
              <Date>{date}</Date>
            </TopText>
          </TopStyle>
          {this.state.display}
          <a href='#' onClick={this.handleClick}>...Read More</a>
        </Wrapper>
      )
    } else {
      return(
        <Wrapper>
          <TopStyle>
            <AvatarStyle src={imageURL} />
            <TopText>
              {review.reviewer_name}
              <br></br>
              <Date>{date}</Date>
            </TopText>
          </TopStyle>
          {this.state.display}
        </Wrapper>
      )
    }
  }
}

export default PreviewEntry;