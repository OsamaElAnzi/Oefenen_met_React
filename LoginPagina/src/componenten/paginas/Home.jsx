import React from 'react';
import { Outlet , Link} from 'react-router-dom';


function Home() {
  return (
    <div>
      <div className="p-5 text-center">
        <h1 className="mb-3">Hallo jij daar!</h1>
        <h4 className="mb-3">Dit is een inlogsysteem gemaakt met React en de styling met Bootstrap</h4>
        <Link to='/login'>Login/Aanmelden</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
