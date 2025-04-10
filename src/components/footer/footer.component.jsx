import SocialMedia from '../social-media/socialmedia.component'

import './footer.styles.scss'

const Footer = () => {
    return (
        <div className="Footer ani-scale-scroll">
            <p>&copy; 2025 Faradis Yulianto. All rights reserved</p>
            <div className='Social-media'>
                <SocialMedia />
            </div>
        </div>
    )
}

export default Footer