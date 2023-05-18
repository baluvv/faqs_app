import './index.css'

const FaqItem = props => {
  const {faqDetails, onToggleIsClicked} = props
  const {id, questionText, answerText, isClicked} = faqDetails

  const changeStatus = () => {
    onToggleIsClicked(id)
  }

  return (
    <li className="faq-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <img
          src={
            isClicked
              ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
          }
          alt={isClicked ? 'minus' : 'plus'}
          onClick={changeStatus}
        />
      </div>
      {isClicked && (
        <div className="answer-container">
          <hr className="line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
