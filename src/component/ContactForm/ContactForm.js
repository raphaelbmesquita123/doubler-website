import { Container } from './styles'
import { toast } from 'react-toastify'
import emailjs from 'emailjs-com'



export default function ContactForm() {

  function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_eczrv1o', 'template_a3j93kc', e.target, 'user_b3vLK4nmsJDCovCRtPpoB')
        .then((result) => {
          toast.error("Thank you for your message")
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  return (
    <Container onSubmit={sendEmail} id="contactForm">
      <h1>Contact Us</h1>
      <input type='text' placeholder='Name' name='name' required />
      <input type='email' placeholder='Email' name='email' required />
      <input
        type='text'
        placeholder='Phone Number / WhatsApp'
        name='phoneNumber'
        required
      />
      <div>
        <small>Contact preferences:</small>
        <label>
          <input
            type='radio'
            id='email'
            name='contactPreference'
            value='email'
          />
          Email
        </label>

        <label>
          <input
            type='radio'
            id='whatsapp'
            name='contactPreference'
            value='whatsapp'
          />
          WhatsApp
        </label>
      </div>
      <textarea name='message' placeholder='Message' required />
      <input type='submit' value='Submit' />
    </Container>
  )
}
