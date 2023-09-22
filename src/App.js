import logo from './logo.svg';
import './App.css';
import LeftMenu from './components/Layout/LeftMenu';

import AllRoutes from './routes/AllRoutes';
import { ProSidebarProvider } from 'react-pro-sidebar'


function App() {
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <ProSidebarProvider>
      <LeftMenu />
        <main>
          <AllRoutes />
        </main>
      </ProSidebarProvider>      
      </div>
      
  );
}

export default App;
