import './bulletpoint.css'

const BulletPoints = ({bulletArray}) => {
  return (
    <div className='bullet-points-container'>
      <ul className='bullet-ul'>
        {bulletArray.map((point,index)=>(
            <li className='bullet-li' key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

export default BulletPoints