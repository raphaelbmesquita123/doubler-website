import styled from 'styled-components'

export const Navbar = styled.nav`
  max-width: 100%;
  height: 5rem;
  background: var(--white);
  box-shadow: 2px 5px 10px var(--gray-700);
  border-bottom: 4px solid var(--red);
  
  div {
    display: flex;
    align-items: center;
    max-width: 1120px;
    margin: auto;
    justify-content: space-around;
    height: 100%;
    
    @media only screen and (max-width: 520px){
        flex-direction: column;
    }
    img {
      height: 2rem;
    }
    
    div {
      margin: 0;
      height:1rem;

      ul {
        display: flex;
        list-style: none;

        a {
          margin-left: 1.5rem;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 0.8rem;
          text-decoration: none;
          color: var(--gray-500);

          &:first-child{
            margin-left: 0;
          }
          
          &:hover {
            color: var(--red);
            font-weight: bold;
          }
        }
      }
    }



  }
  
`
