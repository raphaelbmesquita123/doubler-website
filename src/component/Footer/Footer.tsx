import { Container } from './styles'

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <Container>
      <footer>
        <div>
          <FaEnvelope />
          <span>doublerdigitalmedia@gmail.com</span>
        </div>

        <div>
          <a href='https://www.instagram.com/doublerdigitalmedia/' target="blank">
            <FaInstagram />
          </a>

          <a href='https://www.youtube.com/channel/UCqRCtc7jc1MnZWEM7zvPiDA' target="blank">
            <FaYoutube />
          </a>
          
          <a href='https://api.whatsapp.com/send?l=pt-BR&phone=353834280065&text=Hi%20i%20would%20like%20to%20know%20more%20about' target="blank">
            <FaWhatsapp />
          </a>

          <a href='https://www.linkedin.com/in/raphael-mesquita-135996139/' target="blank">
            <FaLinkedin />
          </a>

        </div>

        <div>
          <span>2021 DOUBLER. ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </Container>
  )
}
