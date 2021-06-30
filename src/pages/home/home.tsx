// import ReactPlayer from 'react-player'
import { Container, Content, VideosContainer, WebSiteContainer} from './styles'
import { FaSortDown } from "react-icons/fa"

export function Home() {

  return (
    <Container>
      <Content>          
        <div className='videoContent'>
          <h1>WHAT DO WE DO?</h1>
          <h3>WEBSITE | SOCIAL MEDIA CONTENT | COMERCIAL | PHOTOSHOOT </h3>
          <small>BE SEEN TO BE REMEMBERED</small>
        </div>
        
        <div className='videoPlayer'>
          {/* <ReactPlayer 
            url="https://www.youtube.com/watch?v=LV4EfQuesOU"
            loop={true}
            controls={false}
            muted={true}
            playing={true}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '180px 280px 80px 50px',
            }}
            
          /> */}
        </div>
        <a href="#contactForm" className="SortDown">

            <small>
              CONTACT US
            </small> 
            <FaSortDown />

        </a>
      </Content>
      <WebSiteContainer>
          <div>
            <h1>Website</h1>
            <h3>Do you need a website? With us is simple, you choose your template and it will be done in 5 days.</h3>
            <a href="/">
              Read More
            </a>
          </div>
      </WebSiteContainer>

      <VideosContainer id='videos'> 
        <div>
          <h1>Videos</h1>
          <div>
            <small>WITH THE BEST QUALITY OF 4K FULL HD AND OVER 10 YEARS OF EXPERIENCE, WE ARE READY TO CRETE THE BEST CONTENT FOR YOUR COMPANY</small>
          </div>
          
        </div>

        <div className='videosImages'>
            <img src="/bullmans.jpg" alt="bullmans" />
            <img src="/texas.jpg" alt="texas" />
            <img src="/vanessa.jpg" alt="vanessa" />
        </div>

        <a href="/">
            Read More
        </a>
      </VideosContainer>

    
    </Container>
  );
}

