import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './pages/HomePage';
import MainContainer from './components/HomePage/MainContainer';
import WatchPage from './pages/WatchPage';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    // nested route
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "/watch",
        element: <WatchPage/>
      }
    ]
  }
])



function App() {
  return (
    <div className="">
      <Header/>
      
      <RouterProvider router={appRouter}/>



    </div>
  );
}

export default App;
