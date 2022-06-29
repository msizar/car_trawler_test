import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleDetails from '../layouts/vehicle';

import VehiclesList from '../layouts/vehiclesList';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehiclesList />} />
        <Route path="/vehicle" element={<VehicleDetails />} />
      </Routes>
    </Router>
  );
};

export default Routers;
