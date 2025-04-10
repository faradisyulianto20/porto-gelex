import './heroes.styles.scss'

import SocialMedia from '../social-media/socialmedia.component'
import Iframe from '../iframe/iframe.component'

import pdf from '../../assets/files/CV_Faradis_Yulianto.pdf'

const Heroes = () => {
    return (
        <>
            <div className="Heroes" id='Heroes'>
                <div className='Heroes-container'>
                    <div className='ani-left-open'>
                        <h1 className='Heroes-heading'>Hello, and Welcome to My Creative Space!</h1>
                        <p className='Heroes-paragraph'>I'm <strong>Faradis Yulianto</strong>, I am a <strong>Software Engineering</strong> student at <strong>Universitas Gadjah Mada</strong>, passionate about <strong>Front-End Development</strong>, <strong>UI/UX Design</strong>, <strong>Computer Vision</strong>, and <strong>Artificial Intelligence</strong>. I enjoy creating innovative and user-centric digital solutions.</p>
                        <p className='Heroes-hook'>Feel free to explore my work below, and don’t hesitate to reach out if you're interested in creating something amazing together!</p>
                        <div className='Heroes-Socialmedia'>
                        <a href={pdf} download='CV.pdf'><button className='Heroes-button'>Download CV</button></a>
                            <SocialMedia />
                        </div>
                    </div>
                    <div className='ani-scale-open'>
                        <Iframe />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heroes