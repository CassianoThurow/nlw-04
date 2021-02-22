import ExpBar from "./components/ExpBar"
import styled from 'styled-components'
import GlobalStyle from './style/globalStyle'

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`


const App = ()  => {
  return (
    <>
    <GlobalStyle/>
    <Container>
      <ExpBar />
    </Container>
    </>
  );
}

export default App;
