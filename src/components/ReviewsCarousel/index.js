// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftClick = () => {
    const {index} = this.state
    if (index <= 4 && index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onRightClick = () => {
    const {index} = this.state
    if (index < 3 && index >= 0) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <div className="carousel-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onLeftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="carousel">
            <h1>Reviews</h1>
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p className="description">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onRightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
