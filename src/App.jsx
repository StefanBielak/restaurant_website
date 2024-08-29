import './Assets/Scss/_reset.scss';
import Header from './Module/Header/Header';
import Introduction from './Module/Introduction/Introduction';
import MenuExample from './Module/Menu_example/Menu_example';
import SpecialOffert from './Module/Special_offert/Special_offert';
import Footer from './Module/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <MenuExample />
      <SpecialOffert />
      <Footer />
    </div>
  );
}

export default App;
