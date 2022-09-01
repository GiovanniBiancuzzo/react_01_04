import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import scifi from '../src/data/scifi.json';
import BookList from './components/BookList';

// let book = scifi[0];
// console.log(book);
function App () {
  return (
    <div className='App'>

      <WarningSign alert="Alert di React Bootstrap" />
      <MyBadge text="Questo è un badge personalizzato" color="success" />
      <BookList books={scifi} />
    </div>
  );
}

export default App;
