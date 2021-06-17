import styled from 'styled-components';


export const Container = styled.div`
  height: calc(100vh - 5rem);
  `

export const Content = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  height: 100%;
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

export const VideoContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  .videoPlayer {
      position: relative;
      width: 600px;
      height: 350px;
      overflow: hidden;
      background: var(--gray-900);

      a{
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        background: var(--red);
        padding: 0.2rem;
        color: var(--gray-100);
        text-decoration: none;
        font-size: 0.6rem;
      }
    }
`
