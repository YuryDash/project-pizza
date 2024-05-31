import s from './app.module.scss'
import {Aside, Footer, Header, Main} from "../feature";
import {HotOffers} from "../feature/main/main-components/hot-offers/hot-offers.tsx";

function App() {

  return (
    <div className={s.container}>
      <div className={s.headerWrapper}><Header/></div>
      <div className={s.asideWrapper}><Aside/></div>
      <div className={s.mainWrapper}><Main/></div>
      <div className={s.footerWrapper}><Footer/></div>
      <div style={{width:'800px', height:'400px'}}><HotOffers/></div>
    </div>
  )
}

export default App
