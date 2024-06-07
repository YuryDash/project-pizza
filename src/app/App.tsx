import s from './app.module.scss'
import {Aside, Footer, Header, Main} from "../feature";

function App() {

  return (
    <div className={s.container}>
      <div id="offers" className={s.headerWrapper}><Header/></div>
      <div className={s.asideWrapper}><Aside/></div>
      <div className={s.mainWrapper}><Main/></div>
      <div className={s.footerWrapper}><Footer/></div>
    </div>
  )
}

export default App
