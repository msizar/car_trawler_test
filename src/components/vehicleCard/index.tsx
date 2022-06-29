import { FC } from 'react';
import {
  GiGearStick,
  GiGasPump,
  GiTeamDowngrade,
  GiCarDoor,
} from 'react-icons/gi';
import { Link } from 'react-router-dom';

import Vehicle from '../../models/vehicle.model';
import Tooltip from '../tooltip';

type CarsProps = {
  vehicle: Vehicle;
};

const VehicleCard: FC<CarsProps> = ({ vehicle }) => (
  <div>
    <div className="card">
      <Link to="/vehicle" state={{ vehicle }}>
        <img
          className="card-img animate__animated animate__fadeIn"
          src={vehicle.pictureURL}
          alt=""
        ></img>
      </Link>
      <div className="cardTitle">
        <Tooltip title="Transmission type" position="top">
          <strong>{'·'}</strong> <GiGearStick />
          {` ${vehicle.transmissionType}`}
        </Tooltip>

        <Tooltip title="Fuel type" position="top">
          <strong>{'·'}</strong>
          <GiGasPump />
          {` ${vehicle.fuelType}`}
        </Tooltip>

        <Tooltip title="Passenger" position="top">
          <strong>{'·'}</strong> <GiTeamDowngrade />
          {` ${vehicle.passengerQuantity}`}
        </Tooltip>

        <Tooltip title="Doors" position="top">
          <strong>{'·'}</strong> <GiCarDoor />
          {` ${vehicle.doorCount}`}
        </Tooltip>
      </div>
      <p className="cardBody">
        {vehicle.vehMakeModel} <small>by ({vehicle.vendor?.name})</small>
      </p>

      <div className="cardRating">
        <div>
          {vehicle.status === 'Available' ? (
            <p>
              {`${vehicle.baggageQuantity}`}
              <span className="new">{vehicle.status}</span>
            </p>
          ) : (
            <div className="new">{vehicle.status}</div>
          )}
        </div>
        <div>
          <p className="cardTotal">{`${vehicle.totalCharge.currencyCode} ${vehicle.totalCharge.rateTotalAmount}`}</p>
        </div>
      </div>
      <div>
        <p className="fa fa-heart fa-3x"></p>
      </div>
    </div>
  </div>
);

export default VehicleCard;
