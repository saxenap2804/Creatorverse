import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import './App.css';

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />
    },
    {
      path: "/view/:id",
      element: <ViewCreator />
    },
    {
      path: "/edit/:id",
      element: <EditCreator />
    },
    {
      path: "/add",
      element: <AddCreator />
    }
  ]);

  return element;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;