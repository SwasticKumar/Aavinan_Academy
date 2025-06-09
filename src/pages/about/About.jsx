import styles from './About.module.css'
import coming from '../../assets/Coming.png'
const About = () => {
  return (
    <div className='container-fluid p-0'>
      <img src={coming} alt="coming soon" height='100%' width="100%"/>
    </div>
  )
}

export default About