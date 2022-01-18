import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Title from './components/Title';
import coverPhoto from './img/coverPhotoResized.png';
import Image from 'react-bootstrap/Image';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Gifting from './components/Gifting';
import Event from './components/Event';
import TagUs from './components/TagUs';
import Livestream from './components/Livestream';
import FunTrivia from './components/FunTrivia';
import Itinerary from './components/Itinerary';

function App() {
  return (
    <div>
      <NavigationBar />
      <Title />
      <Countdown />
      <Image src={coverPhoto} fluid />
      <Event />
      <Itinerary />
      <Livestream />
      <TagUs />
      <Story />
      <FunTrivia />
      <Footer />
    </div>
  );
}

export default App;
