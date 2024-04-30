import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharactersNewPage from './pages/CharactersNewPage/CharactersNewPage';
import CharactersEditPage from './pages/CharactersEditPage/CharactersEditPage';
import CharactersDetailPage from './pages/CharactersDetailPage/CharactersDetailPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalContext.Provider value={{ favoriteChar, setFavoriteChar }}>

          <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
          </header>

          <Routes>
            <Route path={"/"} element={<HomePage />}></Route>
            <Route path={"/characters"} element={<CharactersPage />}></Route>
            <Route path={"/characters/new"} element={<CharactersNewPage />}></Route>
            <Route path={"/characters/:id"} element={<CharactersDetailPage />}></Route>
            <Route path={"/characters/:id/edit"} element={<CharactersEditPage />}></Route>
          </Routes>
        </GlobalContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App




function sum(a, b) {
  return a + b; 
}


