import s from './dots-paging.module.scss'

type Props = {
  i: number
  currentSlide: number
  toggleSlide: (slideIndex: number) => void
}

export function DotsPaging({currentSlide, i, toggleSlide}: Props) {
  return (
    <div className={s.dots} onClick={() => toggleSlide(i)} style={{
      border: i === currentSlide ? `1px solid var(--color-info-500)` : '1px solid var(--color-dark-100)',
      backgroundColor: i === currentSlide ? 'var(--color-light-900)' : 'var(--color-dark-100)',
    }}></div>
  );
}

