import './organization.styles.scss'

const Organization = ({title, institution, date, description}) => {
    return (
        <>
            <div className='Organization ani-right-scroll'>
                <h1>{title}</h1>
                <h3>{institution}</h3>
                <p className='no-margin'>{date}</p>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Organization