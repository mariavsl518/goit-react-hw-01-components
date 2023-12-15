import './Statistics.css'
import data from '../statistics/data.json';

const Statistics = () => {
  return (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul class="stat-list">
        {data.map(st => {
            return (
                <li class="item" key={st.id}>
                <span class="label">{st.label}</span>
                <span class="percentage">{st.percentage}%</span>
              </li>
            )
        })}
        </ul>
    </section>
  )
}

export{Statistics}
