import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: var(--white);
  border-top: 4px solid var(--red);
  padding: 1rem 1rem;
  
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1120px;
    margin: 0 auto;
    
    div {
      &:first-child {
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
          margin-left: 0.5rem;
        }

        &:hover {
          color: var(--red);
        }
      }

      &:nth-child(2) {
        a {
          font-size: 1rem;
          cursor: pointer;
          color: black;
          padding: 0 0.5rem;
          
          &:hover {
            color: var(--red);
          }
        }
      }
    }

    span {
      font-size: 0.8rem;
    }

    @media only screen and (max-width: 600px){
      flex-direction: column;

      div{
        padding: 0.5rem 0;
      }
    }
  }
`
