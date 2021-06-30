import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction:column;
  `

export const Content = styled.header`
  display: flex;
  justify-content: center;
  height: calc(100vh - 5rem);
  align-items: center;
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  
  .videoContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 350px;
    margin-right: 2rem;
    padding: 1rem;
    
    h1 {
      font-size: 2.7rem;
      font-family: 'Roboto';
      color: var(--gray-100);
    }
    
    h3 {
      font-size: 1.5rem;
      color: var(--gray-700);
      margin-top: 0.6rem;
    }
    
    small {
      padding: 1rem;
      font-size: 0.8rem;
      font-weight: 300;
      color: var(--gray-300);
      border: 2px solid var(--red);
      margin-top: 1rem;
      margin-right: auto;
    }
  }
  
  .videoPlayer {
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 180px 260px 80px 120px;
    min-width: 600px;
    min-height: 350px;
    overflow: hidden;
    background: var(--gray-900);
  }
  
  @media only screen and (max-width: 900px) {
    .videoPlayer {
      display: none;
    }
  }
  
  .SortDown { 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    font-size: 3rem;
    color: var(--red);
    cursor: pointer;
    text-decoration: none;

    small{
      font-size: 0.8rem;
      margin-bottom: -1.4rem;
    }
  }
`


export const WebSiteContainer = styled.div`
  background: var(--gray-100);

  div{
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;

    h1{
      width: 150px;
    }
    h3{
      padding-top: 1rem;
      text-align: justify;
    }
    a{
      display: block;
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      background: var(--red);
      padding: 0.5rem;
      color: white;
      text-decoration: none;
    }
  }
`

export const VideosContainer = styled.div`
  background-image: linear-gradient(rgba(0,0,0,0.8), rgba(34, 0, 0, 0.8)), url('/camera.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

   div{
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    
    h1{
      color: var(--gray-100);
      width: 150px;
    }

    div{
      padding: 1rem 0 0 0;

      small {
        color: var(--gray-100);
        text-align: justify;
      }
    }
  }

  .videosImages{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    background: yellow;

    img{
      width: 33%;
      opacity: 0.8;

     :hover {
        opacity: 1;
        transform: scale(1.2);
      }
      
    }
  }

  a{
      display: block;
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      background: var(--red);
      padding: 0.5rem;
      color: white;
      text-decoration: none;
    }

` 