import './navbar.styles.scss'

const Navbar = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="Navbar ani-down-open">
                    <p><a href='#Heroes'>About Me</a></p>
                    <p><a href='#Experiences'>Experiences</a></p>
                    <p><a href='#Skills'>Skills</a></p>
                    <p><a href='#Projects'>Projects</a></p>
                    <p><a href='#Contacts'>Contacts</a></p>
                </div>
            </div>
        </>
    )
}

export default Navbar