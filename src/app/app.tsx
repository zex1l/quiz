import { MainProvider } from '@/shared/providers/main.provider';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <MainProvider>
      <Outlet />
    </MainProvider>
  );
}

export default App;
