import { ArticlesContainer, Title } from "./components"
import GlobalStyle from "./theme/globalStyle"
import { Fragment } from "react"

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <main>
        <Title main>Fyndiq test</Title>
        <ArticlesContainer />
      </main>
    </Fragment>
  );
}

export default App;
