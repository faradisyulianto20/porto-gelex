import './projects.styles.scss'

import Project from './project/project.component'

import dicoding from '../../assets/images/projects/dicoding.svg';
import guessnumber from '../../assets/images/projects/guessnumber.svg';
import magelang from '../../assets/images/projects/magelang.svg';
import todolist from '../../assets/images/projects/todolist.svg';
import todolist2 from '../../assets/images/projects/todolist2.svg';
import tugas from '../../assets/images/projects/tugas.svg';
import berita from '../../assets/images/projects/berita.svg';
import dgt from '../../assets/images/projects/dgt.svg';


const Projects = () => {
    const projects = [
        {
            title: 'Magelang',
            description: 'A personal project I built to explore web development techniques. This website is a local project about the city of Magelang, created as part of my learning journey in web design and development.',
            image: magelang,
            link: 'https://faradisyulianto20.github.io/magelang-website/',
            github: 'https://github.com/faradisyulianto20/magelang-website'
        },
        {
            title: 'DGT',
            description: 'Devil Gama Technology (DGT) is a portfolio site for an extracurricular organization. The site was designed to showcase their events, mission, and accomplishments, demonstrating the potential of organizational web presence.',
            image: dgt,
            link: 'https://dgtech-github-io.vercel.app/',
            github: ''
        },
        {
            title: 'To-Do List 1',
            description: 'A simple but effective productivity tool built to help users manage tasks efficiently. It features easy-to-use functionality with options to add, edit, and delete tasks.',
            image: todolist,
            link: 'https://faradisyulianto20.github.io/to-do-list-1/',
            github: 'https://github.com/faradisyulianto20/to-do-list-1'
        },
        {
            title: 'To-Do List 2',
            description: 'The To-Do List app, created as a project in the Dicoding bootcamp. This version includes additional features like task categorization, priority levels, and responsive design for mobile use.',
            image: todolist2,
            link: 'https://faradisyulianto20.github.io/to-do-list-2/',
            github: 'https://github.com/faradisyulianto20/to-do-list-2'
        },
        {
            title: 'Number Guess',
            description: 'A fun game where users are challenged to guess a 3-digit number. This game helps sharpen cognitive abilities and demonstrates basic game logic.',
            image: guessnumber,
            link: 'https://faradisyulianto20.github.io/belajar-js/permainan.html',
            github: 'https://github.com/faradisyulianto20/belajar-js'
        },
        {
            title: 'Berita',
            description: 'A website that contain news that is fit in a box. I built website for personal learning.',
            image: berita,
            link: 'https://berita-alpha.vercel.app/',
            github: 'https://github.com/faradisyulianto20/berita'
        },
        {
            title: 'Tugas Kuliah',
            description: 'A college project aimed at creating a responsive website for an academic assignment. This project helped me practice building modern, mobile-first websites and includes hands-on experience with CSS and JavaScript.',
            image: tugas,
            link: 'https://faradisyulianto20.github.io/responsive-tugas-kuliah/',
            github: 'https://github.com/faradisyulianto20/responsive-tugas-kuliah'
        },
        {
            title: 'Dicoding Homepage',
            description: 'A personal project from the Dicoding bootcamp to replicate the homepage of Dicoding, a popular online learning platform. This assignment taught me how to handle layout, grid systems, and navigation in React.',
            image: dicoding,
            link: 'https://faradisyulianto20.github.io/dicoding-homepage/',
            github: 'https://github.com/faradisyulianto20/dicoding-homepage'
        }
    ]

    return (
        
        <>
            <div className='Projects-heading heading ani-scale-scroll' id='Projects'>
                Projects
            </div>
            <div className="Projects">
                {
                    projects.map(({title, description, image, link, github}) => (
                    <Project title={title} description={description} image={image} link={link} github={github} />
                ))
                }
            </div>
        </>
    )
}

export default Projects