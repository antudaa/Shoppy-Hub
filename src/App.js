import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthContextProvider from './Context/AuthContextProvider';
import router from './Pages/Router/Router';


function App() {


  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthContextProvider>
    </div>
  );
}

export default App;
