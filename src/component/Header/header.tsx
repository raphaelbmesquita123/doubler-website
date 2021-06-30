import { Navbar } from './styles'

export function Header() {
  return (
    <Navbar >
        <div>
            <a href="/">
                <img src='/DoublerFullLogo.png' alt='DoubleR Digital Media' />
            </a>
            
            <div>
                <ul>
                    <a href="/">
                        <li>Website</li>
                    </a>
                    <a href="#videos">
                        <li>Videos</li>
                    </a>
                    <a href="/">
                        <li>Photoshoot</li>
                    </a>
                </ul>
            </div>
        </div>
    </Navbar>
  )
}
