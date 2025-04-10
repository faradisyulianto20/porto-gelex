import './card.styles.scss'

const Card = ({title, description, link}) => {
    return (
        <>
            <div className="Card ani-left-scroll">
                <div className="Card-header"><p>{title}</p></div>
                <div className="Card-paragraph">{description}</div>
                <a className='Card-anchor' href={link}><button className='Card-button' >View</button></a>
            </div>
        </>
    )
}

export default Card