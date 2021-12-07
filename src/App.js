import React from 'react';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <form>
              <label>
                <input type="text" name='q' placeholder="search" />
                <button type="submit">search</button>
                </label>
            </form>
          </li>
        </ul>
      </nav>
      <main>
        <div className='article-container'>
          <div className="article">
            <div className="article-head">lorem Ipsum dolla sepf</div>
            <div className="article-desc">this is jus a  test article to test the article app more is coming</div>
            <div className="article-autthor">Author: unknown</div>
          </div>
        </div>
      </main>
      <footer>
        <ul>
          <li>Dating Tips</li>
          <li className='active'>Home</li>
          <li>Me</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
