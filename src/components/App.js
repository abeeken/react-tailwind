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
      <div className="App flex flex-col p-12 m-12 bg-gray-300 shadow-xl rounded-xl justify-center items-center">
        <Header />
      </div>
    </>
  );
}

export default App;
