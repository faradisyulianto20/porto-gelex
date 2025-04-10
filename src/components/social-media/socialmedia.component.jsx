
import './socialmedia.styles.scss'

import github from '../../assets/images/projects/github.svg';
import instagram from '../../assets/images/projects/instagram.svg';
import linkedin from '../../assets/images/projects/linkedin.svg';
import gmail from '../../assets/images/projects/gmail.svg';


const SocialMedia = () => {

    const social_media = [
        {
            title: 'linkedin',
            link: '',
            image: linkedin
        },
        {
            title: 'instagram',
            link: '',
            image: instagram
        },
        {
            title: 'github',
            link: '',
            image: github
        },
        {
            title: 'gmail',
            link: '',
            image: gmail
        },
    ]
    return (
        <div className='SocialMedia-container'>
            {
                social_media.map(({title, link,image}) => (
                    <div className='SocialMedia'>
                        <button href={link}><img alt={title} src={image}></img></button>
                    </div>
                ))
            }
        </div>
    )
}

export default SocialMedia