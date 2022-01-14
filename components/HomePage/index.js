import ImageGallery from './ImageGallery'
import Contents from './Contents'
import Parallax from './Parallax'
import Memberships from './Memberships'

const HomePage = () => {
  return (
    <div>
      <Contents />
      <Parallax />
      <Memberships />
      <ImageGallery />
    </div>
  )
}

export default HomePage
