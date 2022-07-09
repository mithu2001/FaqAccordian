import React from 'react'
import "./Accordian.css";
const MyAccordian = ({ question, answer }) => {

  return (
    <>
      <div className="box">

        <div className="faqs">
          <details>
            <summary><strong>{question}</strong></summary>
            <p className="text">{answer}</p>
          </details>

        </div>
      </div>
    </>
  )
}

export default MyAccordian;