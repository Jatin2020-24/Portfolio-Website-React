import React from 'react'
import "./dev.css";

const Dev = () => {
    return (
        <div className='d'>
            <div className="d-container">
                <h1 className="d-title">
                    Dev Experience
                </h1>

                <div className="d-exp-1">
                    <p className="d-company">
                        Google Summer of Code
                    </p>
                    <p className="d-position">
                        Open Source Developer
                    </p>
                    <p className="d-time">
                        June 2022 - Present
                    </p>
                    <li>
                        Writing clean and well-tested code, while collaborating with other developers, identifying and resolving bugs in the code base.
                    </li>
                    <li>
                        Performing automated testing tasks and developing complex features.
                    </li>
                </div>

                <div className="d-exp-2">
                    <p className="d-company">
                        Microsoft Engage Programme
                    </p>
                    <p className="d-position">
                        Mentee
                    </p>
                    <p className="d-time">
                        May 2022 - May 2022
                    </p>
                    <li>
                        Developed Facial Recognition based Attendance System under Mentorship of Software Engineer of Microsoft.
                    </li>
                </div>

                <div className="d-exp-3">
                    <p className="d-company">
                        Sparks Foundation
                    </p>
                    <p className="d-position">
                        Web Developer Intern
                    </p>
                    <p className="d-time">
                        Aug 2021 - Aug 2021
                    </p>
                    <li>
                        Worked on Banking System using Python, Flask, HTML, CSS, and Bootstrap.
                    </li>
                </div>
            </div>

        </div>
    )
}

export default Dev