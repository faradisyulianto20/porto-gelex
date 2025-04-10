import { useState, useEffect } from 'react';
import './iframe.styles.scss'

const Iframe = () => {

    const data = [
        {
            title: '',
            link: 'https://dgtech-github-io.vercel.app/'
        },
        {
            title: '',
            link: 'https://faradisyulianto20.github.io/tugas_ppw/'
        },
        {
            title: '',
            link: 'https://sikolov.com/'
        },
        {
            title: '',
            link: 'https://palpod.trpl.space/'
        }
    ]

    const [iframeIndex, setIframeIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIframeIndex((prevIndex) => (prevIndex + 1) % data.length); 
        }, 5000);

        return () => clearInterval(intervalId);

    }, [data.length]);

    return (
        <div className='Iframe'>
            <iframe title={data[iframeIndex].title} src={data[iframeIndex].link} width="600" height="400" >
            </iframe>
            <div className='Iframe-button-container'>
                <a href={data[iframeIndex].link} target="_blank" rel="noopener noreferrer">
                    <button className='Iframe-button'>Visit Now</button>
                </a>
            </div> 
        </div>
    )
}

export default Iframe