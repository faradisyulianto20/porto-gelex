import '../home/home.styles.scss'

import Heroes from '../../components/heroes/heroes.component'
import Navbar from '../../components/navbar/navbar.component'
import Experience from '../../components/experiences/experiences.component'
import Skills from '../../components/skills/skills.component'
import Projects from '../../components/projects/projects.component'
import Contact from '../../components/contacts/contacts.component'
import Footer from '../../components/footer/footer.component'

const Home = () => {

    return (
        <>
            <div className='Home'>
                <Navbar />
                <Heroes />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>

    )
}

export default Home