import css from './Statistics.module.css'
// import data from '../statistics/data.json';

const Statistics = ({title='', stats}) => {
  return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(st =>
            (
              <li className={css.item}>
                <span className={css.label}>{st.label}</span>
                <span className={css.percentage}>{st.percentage}</span>
              </li>
            )
          )}
        </ul>
    </section>
  )
}

export{Statistics}
