import Header from './components/Header'



import {Container} from './components/styles/Container.styled'



import GlobalStyles from './components/styles/Global';

import Images from './components/images';

import Content from './components/content'



import Lower from './components/lower'




import Minend from './components/minend'

 import Sami from './components/mid'

import Second from './components/adress'
function App() {
  return (
    <>
    <GlobalStyles />
    <Container>
     <h1 className="head">DigiTech</h1>
       <ul>
         <li className="dog">Services</li>
         <li className="dog">Studies</li>
         <li className="dog">Portfolio</li>
       </ul>
     <div className="foop">
       <button className="talk">Let's Talk</button>
     </div>
    </Container>
    <Header />
    <Images />
    <Content/>
    <Lower />
    <Minend />
    <Sami />
    <Second />
    </>
  );
}

export default App;
