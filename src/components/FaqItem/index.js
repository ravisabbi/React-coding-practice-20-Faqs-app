// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isAnswerShow: false}

  showAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    return (
      <div>
        <hr className="separator" />
        <p className="answer">{answerText}</p>
      </div>
    )
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({isAnswerShow: !prevState.isAnswerShow}))
  }

  render() {
    const {isAnswerShow} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    const btnUrl = isAnswerShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgAtlText = isAnswerShow ? 'minus' : 'plus'

    return (
      <li className="faq-item">
        <div className="question-btn-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="btn" onClick={this.onToggleAnswer}>
            <img src={btnUrl} alt={imgAtlText} className="btn-img" />
          </button>
        </div>
        {isAnswerShow && this.showAnswer()}
      </li>
    )
  }
}

export default FaqItem
