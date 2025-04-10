import './project.styles.scss';

import browser from '../../../assets/images/projects/browser.svg';
import github_logo from '../../../assets/images/projects/github.svg';

const Project = ({ title, description, image, link, github }) => {
  return (
    <div className="Project ani-left-scroll">
      <img src={image} alt={title} />
      <div className="Project-header">
        {title}
      </div>
      <div className="Project-paragraph">
        {description}
      </div>
      <div className='Project-button-container' style={{ display: 'flex', gap: '1em' }}>
        <a className='Project-anchor' href={link}>
          <button className='Project-button'>
            <img className='Project-button-icon' alt='browser' src={browser} />
          </button>
        </a>
        <a className='Project-anchor' href={github}>
          <button className='Project-button'>
            <img className='Project-button-icon' alt='github' src={github_logo} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
