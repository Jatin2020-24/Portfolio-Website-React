import React from 'react'
import "./about.css"
import ai from "../../img/programmer.jpeg"
import award from "../../img/award.png"

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={ai}
            alt="hello"
            className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className='a-salutation'>Hello !</p>
        <p className="a-sub">
          I'm a 20 year-old student currently pursuing a bachelor's degree in Information technology with interest in machine learning, blockchain and web development. I enjoy solving problems, writing, building
          on my ideas, making projects, mentoring, and automating workflows.
        </p>
        <p className='a-desc'>
          I'm also passionate about contributing to open-source projects, and enthusiastic about tinkering and messing around with both software and hardware likewise.
        </p>
        <p className='a-desc'>
          I'm a problem-solver at heart, highly teachable and eager to learn new skills, fun to work with, have a killer work ethic, and above all, extremely curious and ask a lot of questions!
        </p>
        <li>
           I'm currently learning ReactJS, and deep-diving into Machine Learning and Blockchain.
        </li>
        <li>
          I'm looking to collaborate on Hackathons. If you like my profile, feel free to get in touch with me!
        </li>
      </div>
    </div>
  )
}

export default About