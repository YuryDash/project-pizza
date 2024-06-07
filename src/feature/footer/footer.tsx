import s from './footer.module.scss'
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store/store.ts";
import {numActionCreator} from "../../reducers/app-reducer.ts";
type Props = any

export function Footer({}: Props) {
  const val = useSelector<RootState, number>(state => state.appReducer.num)
  const dispatch = useAppDispatch()

  const handle = () => {
    dispatch(numActionCreator())
  }

  return (
    <footer className={s.footer}>
      <div>{val}</div>
      <button onClick={handle}>tuck!</button>
    </footer>
  );
}
