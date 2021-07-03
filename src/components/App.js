import '../scss/App.scss';

import { Helmet } from 'react-helmet';

import Header from './Header';

const TITLE = 'React Tailwind';

function App() {
  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="App container flex flex-col p-12 my-12 mx-auto bg-gray-300 shadow-xl rounded-xl justify-center items-center">
        <Header />
      </div>
    </>
  );
}

export default App;
