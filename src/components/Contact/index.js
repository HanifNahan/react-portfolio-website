import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './style.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_mu6vjsk',
                'template_rjbmwpb',
                form.current,
                'MguoG6b9sT-9caDTO'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Contact me'.split('')}
                            idx={15} />
                    </h1>
                    <p>
                        I am interested in working with tech industries.
                        However, if you have other request or question, 
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Muhammad Hanif Bin Ahmad Nahan, <br/>
                    Padang Besar, Perlis. <br/>
                    <span>muhammad.hanif.mh639@gmail.com</span>
                </div>
                <div className='info-map'>

                </div>
                <div className='map-wrap'>
                    <MapContainer center={[6.59869284733543, 100.21327933418283]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[6.59869284733543, 100.21327933418283]}>
                        <Popup>Come and let's have a cup of coffee</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact