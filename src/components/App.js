import '../scss/App.scss';

import { Helmet } from 'react-helmet';

import Header from './Header';
import Body from './Body';

const TITLE = 'React Tailwind';

function App() {
  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="App container p-12 my-12 mx-auto bg-gray-300 shadow-xl rounded-xl">
        <Header />
        <Body />
        <div className="pt-10 text-xs w-full lg:w-1/2 lg:mx-auto">Visit <a href="https://www.andrewbeeken.co.uk" target="_blank">andrewbeeken.co.uk</a></div>
      </div>
    </>
  );
}

export default App;