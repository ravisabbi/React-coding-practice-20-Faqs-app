// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="Faqs-container">
          <h1 className="main-heading">Faqs</h1>
          <ul className="faqsList">
            {faqsList.map(eachItem => (
              <FaqItem faqDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
