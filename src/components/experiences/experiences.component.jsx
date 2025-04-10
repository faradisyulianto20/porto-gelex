import './experience.styles.scss'

import Card from './card/card.component'
import Organization from './organizations/organizations.component'

const Experience = () => {

    const experiences = [
        {
            title: 'Devil Gama Technology',
            description: 'I had the honor of serving as the president of the extracurricular computer organization at SMAN 4 Magelang. During my time there, I led the development of the DGT website and took charge of creating the DELGALOS platform, which was used for the election of the OSIS (student council) president, showcasing my leadership and technical skills in web development',
            link: 'https://dgtech-github-io.vercel.app/'
        },
        {
            title: 'ASSETS',
            description: 'Developed an asset management website using Laravel for the backend and ReactJS for the frontend. This project involved implementing a robust and user-friendly system to manage various assets, leveraging the strengths of both frameworks to create a seamless, responsive, and efficient web application.',
            link: ''
        }
    ]

    const organization = [
        {
            title: 'Entrepreneurship',
            institution: 'KMTEDI',
            date: 'February 2025 - Present',
            description: 'In the Entrepreneurship Division, I actively engage in designing promotional materials for our canteen, ensuring they align with our branding and attract customers. I compile weekly sales reports to monitor performance and identify areas for improvement. Collaborating closely with canteen staff, suppliers, and the entrepreneurship team, I facilitate effective communication and streamline operations. Additionally, I prepare and distribute meeting minutes to keep all stakeholders informed and aligned with our objectives. '
        },
        {
            title: 'Science and Technology',
            institution: 'ASSETS',
            date: 'March 2025 - Present',
            description: 'In the Science and Technology Division, I actively contribute to the development and management of the ASSET (Association of Software Engineering Technology Students) website. My responsibilities include designing an intuitive user interface, optimizing site functionality, and ensuring that the content remains relevant and up-to-date. Collaborating closely with the team, I work to enhance user experience and ensure that the website accurately reflects the mission and objectives of ASSET. This initiative aims to provide an effective information platform for members and visitors, supporting ASSETS vision of advancing the field of software engineering technology.'
        },
        {
            title: 'Media and Information',
            institution: 'IMAGE',
            date: 'March 2025 - Present',
            description: 'In the Media and Information Division of IMAGE (Ikatan Mahasiswa Gadjah Mada Magelang), I actively participate in photographing and designing materials for cabinet releases, ensuring they effectively communicate our organizations initiatives. I also handle documentation for events such as the First Gathering and Handover Ceremony, capturing key moments to maintain a visual record of our activities. Collaborating with fellow members, I contribute to promoting our mission and fostering a sense of community among students with ties to Magelang.'
        },
        {
            title: 'Sponsorship',
            institution: 'GAMATRUST #15',
            date: 'September 2024 - November 2024',
            description: 'In the Sponsorship Division of GAMATRUST #15 (Gadjah Mada Try Out and Socialization), I actively engage in disseminating sponsorship proposals to various companies, aiming to secure support for our events. I manage the procurement process by creating detailed databases and handling merchandise orders, ensuring timely availability of promotional items. My role also involves negotiating and presenting sponsorship packages, highlighting mutual benefits to foster strong partnerships. Additionally, I assist third-party sponsors in fulfilling their commitments, ensuring that all agreed-upon deliverables are met, thereby enhancing the overall success of our initiatives.'
        },
        {
            title: 'Sponsorship',
            institution: 'Tech Enthusiast Day 2024',
            date: 'September 2024 - November 2024',
            description: 'In the Sponsorship Division of TED (Tech Enthusiast Day), I am responsible for distributing sponsorship proposals to various companies, aiming to secure support for our events. I manage the ordering and payment processes for TED merchandise, including shirts and ID cards, ensuring timely and accurate transactions. I also maintain detailed records using Excel to track sponsorship contributions and fulfillments. Additionally, I handle documentation and organization of sponsor deliverables, ensuring that all commitments are met and that sponsors receive the agreed-upon benefits.'
        }
    ]

    return (
        <>
            <div className='Experience-section' id='Experiences'>
                <div className='Experience-heading heading ani-scale-scroll'>
                    Experiences
                </div>
                <div className='Experiences'>
                    {
                        experiences.map(({title, description, link}) => (
                            <Card className='' title={title} description={description} link={link}/>
                        ))
                    }
                </div>
                <div className='Organization-heading heading ani-scale-scroll'>
                    Organizations/Events Staff
                </div>
                <div className='Organization'>
                    {
                        organization.map(({title, institution, date, description}) => (
                            <Organization className='' title={title} institution={institution} date={date} description={description} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Experience