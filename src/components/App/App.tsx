import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import Form from '../Form';
import Layout from '../Layout';

import './App.scss';
import { useAppSelector } from 'store/hooks';
import PersonCard from 'components/Cards/PersonCard';

const App = () => {
  const cards = useAppSelector((state) => state.cards.cards);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('person') && !cards.personId) {
      navigate('/');
    }
  }, [cards.personId, location.pathname, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={`person-${cards.personId}`} element={<PersonCard />} /> :
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="user-form" element={<Form />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
