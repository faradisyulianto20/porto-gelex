
import './socialmedia.styles.scss'

import github from '../../assets/images/projects/github.svg';
import instagram from '../../assets/images/projects/instagram.svg';
import linkedin from '../../assets/images/projects/linkedin.svg';
import gmail from '../../assets/images/projects/gmail.svg';


const SocialMedia = () => {

    const social_media = [
        {
            title: 'linkedin',
            link: 'https://www.linkedin.com/in/faradis-yulianto-76274a1b3/',
            image: linkedin
        },
        {
            title: 'instagram',
            link: 'https://www.instagram.com/far.adis_/',
            image: instagram
        },
        {
            title: 'github',
            link: 'https://github.com/faradisyulianto20',
            image: github
        },
        {
            title: 'gmail',
            link: 'mailto:faradisy20@gmail.com',
            image: gmail
        },
    ]
    return (
        <div className='SocialMedia-container'>
            {
                social_media.map(({title, link,image}) => (
                    <div className='SocialMedia'>
                        <a href={link}><button href={link}><img alt={title} src={image}></img></button></a>
                    </div>
                ))
            }
        </div>
    )
}

export default SocialMedia