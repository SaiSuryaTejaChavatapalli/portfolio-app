import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_htws2je',
        'template_mattf3c',
        refForm.current,
        '2-q4SBx0d-XIJnAYy'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Message Sent Successfully')
          console.log('Email Sent')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the Message.Please,Try again!')
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            This site is a great example of what we have said before: sometimes
            it’s enough to create an excellent “About me” page to promote your
            brand (which, actually, will work as a full-fledged website).
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="">
                  <input
                    type="text"
                    name="user_subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li className="">
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
