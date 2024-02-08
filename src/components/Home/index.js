import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Letter from './Letter'
import './style.scss'
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ' Hanif'.split('')
    const jobArray = "I'm a".split('')
    const devArray = 'Software Developer'.split('')

    useEffect(() => {
        return () => setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    {/* <img src={LogoTitle} alt="developer" /> */}
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={20}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={devArray}
                        idx={10}
                    />
                </h1>
                <h2>I'm a self-taught programmer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Letter />
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home