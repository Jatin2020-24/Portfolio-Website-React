// rafce
import "./intro.css"

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jatin Jain</h1>
                    <div className="i-desc">
                    Engineering Solutions, Communities, and Code. 
                    </div>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Open Source Enthusiast</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Competitive Programmer</div>
                            <div className="i-title-item">IT Undergrad</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                    <p className="i-resume"><a href="https://drive.google.com/file/d/1ztXyF4U90axMfc67xjNOP9g1j38rvuT2/view?usp=sharing" target="_blank">Resume</a>➞</p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
            </div>
        </div>
    )
}

export default Intro