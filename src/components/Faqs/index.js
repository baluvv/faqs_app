import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList.map(eachFaq => ({...eachFaq, isClicked: false})),
    }
  }

  onToggleIsClicked = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaq => {
        if (eachFaq.id === id) {
          return {...eachFaq, isClicked: !eachFaq.isClicked}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    console.log(faqsList)
    return (
      <div className="app-container">
        <ul className="list-container">
          <h1 className="heading">FAQs</h1>
          {faqsList.map(eachFaq => (
            <FaqItem
              faqDetails={eachFaq}
              key={eachFaq.id}
              onToggleIsClicked={this.onToggleIsClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
