import React from 'react'
import { questions } from './api'
import "./Accordian.css";
import { useState } from 'react';
import MyAccordian from './MyAccordian'

const Accordian = () => {
  const [data] = useState(questions);
  return (
    <>
      <section className='main-div'>
        <div className="box">
          <p className="pf-header"><span className='pf-text'>PF</span> SAMADHAN</p>
        </div>
        <div className="box">
          <p className="heading">Important F.A.Q.s</p>
        </div>
        {
          data.map((curElem) => {
            const { id } = curElem;
            return <MyAccordian key={id}{...curElem} />;
          })
        }

      </section>
    </>
  )
}

export default Accordian;