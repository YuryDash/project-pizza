import {Aside} from "../feature/sidebar/aside.tsx";
import {Header} from "../feature/header/header.tsx";
import {Main} from "../feature/main/main.tsx";
import {Footer} from "../feature/footer/footer.tsx";
import s from './app.module.scss'

function App() {

  return (
    <div className={s.container}>
      <div className={s.headerWrapper}><Header/></div>
      <div className={s.asideWrapper}><Aside/></div>
      <div className={s.mainWrapper}><Main/></div>
      <div className={s.footerWrapper}><Footer/></div>
    </div>
  )
}

export default App
