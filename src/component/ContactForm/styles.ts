import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  padding: 3rem;

  h1 {
    color: var(--gray-100);
    margin-bottom: 1rem;
  }

  input,
  textarea {
    width: 100%;
    margin: 0 auto;
    padding: 1rem 1rem;
    margin: 1rem 0;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid var(--gray-700);
    color: var(--gray-300);

    &:focus {
      outline: none;
    }
  }

  input[type='submit'] {
    align-self: flex-end;
    width: 100px;
    border: none;
    background-color: var(--red);
    color: var(--white);
  }

  div {
    display: flex;
    align-items: center;
    position: relative;
    padding: 2rem 0 0 0;

    small {
      position: absolute;
      top: 1rem;
      left: 0.5rem;
      font-size: 1rem;
      color: gray;
    }
    label {
      margin-right: 2rem;
      color: gray;
      input {
        width: 30px;
      }
    }
  }

  textarea {
    height: 150px;
  }
`
