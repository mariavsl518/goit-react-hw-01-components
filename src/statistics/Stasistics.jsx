import './Statistics.css'
// import data from '../statistics/data.json';

const Statistics = ({title='', stats}) => {
  return (
    <section className="statistics">
        <h2 className="title">{title}</h2>
        <ul className="stat-list">
          {stats.map(st => 
            (
              <li class="item">
                <span className="label">{st.label}</span>
                <span className="percentage">{st.percentage}</span>
              </li>
            )
          )}
        </ul>
    </section>
  )
}

export{Statistics}
