import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Title from './components/Title';
import coverPhoto from './img/coverPhotoResized.png';
import Image from 'react-bootstrap/Image';
import Countdown from './components/Countdown';
import Story from './components/Story';
import RSVP from  './components/RSVP';
import Event from './components/Event';
import TagUs from './components/TagUs';

function App() {
  return (
    <div>
      <NavigationBar />
      <Title />
      <Countdown />
      <Image src={coverPhoto} fluid />
      <Event />
      <RSVP />
      <TagUs />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
