import './skills.styles.scss'

import html from '../../assets/images/skills/html.svg';
import css from '../../assets/images/skills/css.svg';
import javascript from '../../assets/images/skills/javascript.svg';
import python from '../../assets/images/skills/python.svg';
import java from '../../assets/images/skills/java.svg';
import react from '../../assets/images/skills/react.svg';
import tailwind from '../../assets/images/skills/tailwind.svg';
import nextjs from '../../assets/images/skills/nextjs.svg';

const Skills = () => {

    const skills = [
        {  
            title: 'HTML',
            image: html
        },
        {  
            title: 'CSS',
            image: css
        },
        {  
            title: 'JavaScript',
            image: javascript
        },
        {  
            title: 'Python',
            image: python
        },
        {  
            title: 'Java',
            image: java
        },
        {  
            title: 'React',
            image: react
        },
        {  
            title: 'Tailwind',
            image: tailwind
        },
        {  
            title: 'NextJS',
            image: nextjs
        }
    ]

    return (
      <div id='Skills'>
        <div className='Skills-heading heading ani-scale-scroll'>
          Skills
        </div>
        <div className="Skills ani-up-scroll">
          {skills.map(({ title, image }) => {
            return (
              <div className='Skill' key={title}>
                <img src={image} alt={title} />
              </div>
            );
          })}
        </div>
      </div>
      
    );
  };
  
  export default Skills;