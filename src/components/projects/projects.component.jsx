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
            description: 'Magelang adalah kota Sejuta Bunga',
            image: magelang,
            link: ''
        },
        {
            title: 'DGT',
            description: 'DGT (Devil Gama Technology) adalah ekstakurikuler komputer SMAN 4 Magelang',
            image: dgt,
            link: ''
        },
        {
            title: 'To-Do List',
            description: 'To-Do List untuk produktifitas',
            image: todolist,
            link: ''
        },
        {
            title: 'To-Do List',
            description: 'To-Do List untuk produktifitas',
            image: todolist2,
            link: ''
        },
        {
            title: 'Number Guess',
            description: 'Permainan menebak angka',
            image: guessnumber,
            link: ''
        },
        {
            title: 'Berita',
            description: 'Berita terbaru',
            image: berita,
            link: ''
        },
        {
            title: 'Tugas Kuliah',
            description: 'Tugas kuliah Praktikum Pemrograman Web',
            image: tugas,
            link: ''
        },
        {
            title: 'Dicoding Homepage',
            description: 'Homepage dicoding',
            image: dicoding,
            link: ''
        }
    ]

    return (
        
        <>
            <div className='Projects-heading heading ani-scale-scroll' id='Projects'>
                Projects
            </div>
            <div className="Projects">
                {
                    projects.map(({title, description, image, link}) => (
                    <Project title={title} description={description} image={image} link={link} />
                ))
                }
            </div>
        </>
    )
}

export default Projects