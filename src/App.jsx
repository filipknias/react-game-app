import Appbar from './components/Appbar/Appbar';
import MainView from './components/MainView/MainView';
import ShipsContextProvider from './context/ShipsContextProvider';

const App = () => {
  return (
    <ShipsContextProvider>
      <Appbar />
      <MainView />
    </ShipsContextProvider>
  );
}

export default App;
