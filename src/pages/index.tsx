import styled from 'styled-components'
import Main from 'components/Main'

const Wrapper = styled.div`
  
`;


export default function Home() {
  return (
    <>
            <title>Wanderley Junior</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Site pessoal de Wanderley Junior"
        />
    <Wrapper>
      <Main />
    </Wrapper>
    </>
  )
}
