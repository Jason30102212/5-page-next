import ImageGallery from './ImageGallery'
import Header from '../Header'
import Contents from './Contents'
import Parallax from './Parallax'
import Memberships from './Memberships'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Contents />
      <Parallax />
      <Memberships />
      <ImageGallery />
    </div>
  )
}

export default HomePage
