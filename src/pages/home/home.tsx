import ReactPlayer from 'react-player'
import { Container, Content, VideoContent} from './styles'
import { FaSortDown } from "react-icons/fa";

export function Home() {

  return (
    <>
    <Container>
      <Content>          
        <div className='videoContent'>
          <h1>WHAT DO WE DO?</h1>
          <h3>WEBSITE | SOCIAL MEDIA CONTENT | COMERCIAL | PHOTOSHOOT </h3>
          <small>BE SEEN TO BE REMEMBERED</small>
        </div>
        <div className='videoPlayer'>
          <ReactPlayer 
            url="https://www.youtube.com/embed/P5UbFA0Ax1Q"
            loop={true}
            controls={false}
            muted={true}
            playing={true}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.7,
              borderRadius: '180px 280px 80px 50px',
            }}
          />
        </div>
        <a href="#contactForm" className="SortDown">

            <small>
              CONTACT US
            </small> 
            <FaSortDown />

        </a>
      </Content>
  </Container>

  <VideoContent id="videos">
    <div className='videoPlayer'>
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=jPlk5McbGBc"
        loop={true}
        controls={false}
        muted={true}
        playing={true}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.7,
          borderRadius: '180px 280px 80px 50px',
        }}
      />
      <a href="https://www.youtube.com/watch?v=jPlk5McbGBc" target="blank">FULL VIDEO</a>
    </div>
    <div className='videoPlayer'>
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=vXLlsJcXSnI"
        loop={true}
        controls={false}
        muted={true}
        playing={true}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.7,
          borderRadius: '180px 280px 80px 50px',
        }}
      />
      <a href="https://www.youtube.com/watch?v=vXLlsJcXSnI" target="blank">FULL VIDEO</a>
    </div>
    <div className='videoPlayer'>
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=qi4P_nDxI_M&t=4s"
        loop={true}
        controls={false}
        muted={true}
        playing={true}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.7,
          borderRadius: '180px 280px 80px 50px',
        }}
      />
      <a href="https://www.youtube.com/watch?v=qi4P_nDxI_M&t=4s" target="blank">FULL VIDEO</a>
    </div>

  </VideoContent>
  </>
  );
}

