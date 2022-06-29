import { FC } from 'react';
import { useLocation } from 'react-router';
import Vehicle from '../../models/vehicle.model';

import './vehicleDetailsStyle.css';

const VehicleDetails: FC = () => {
  const { state } = useLocation();
  const { vehicle } = state as { vehicle: Vehicle };

  return (
    <div>
      <div className="header">
        <h1>{`${vehicle.vendor?.name} VEHICLES`}</h1>
      </div>
      <div>
        <div className="card-wrapper">
          <div className="vehicle-card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img src={vehicle?.pictureURL || ''} alt="" />
                </div>
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title">
                {vehicle?.vehMakeModel || 'Data No Found'}
              </h2>
              <div className="product-link">{vehicle.status}</div>
              <div className="product-rating">
                <span>4.7(21)</span>
              </div>

              <div className="product-price">
                <p className="last-price">
                  Estimated Total Amount{' '}
                  <span>{`${vehicle.totalCharge.currencyCode} ${vehicle.totalCharge.estimatedTotalAmount}`}</span>
                </p>
                <p className="new-price">
                  Rate Total Amount:{' '}
                  <span>{`${vehicle.totalCharge.currencyCode} ${vehicle.totalCharge.rateTotalAmount}`}</span>
                </p>
              </div>

              <div className="product-detail">
                <h2>about this item: </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  eveniet veniam tempora fuga tenetur placeat sapiente
                  architecto illum soluta consequuntur, aspernatur quidem at
                  sequi ipsa!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, perferendis eius. Dignissimos, labore suscipit.
                  Unde.
                </p>
                <ul>
                  <li>
                    Transmission Type: <span>{vehicle.transmissionType}</span>
                  </li>
                  <li>
                    Fuel Type: <span>{vehicle.fuelType}</span>
                  </li>
                  <li>
                    Passenger Quantity: <span>{vehicle.passengerQuantity}</span>
                  </li>
                  <li>
                    Door Count: <span>{vehicle.doorCount}</span>
                  </li>
                  <li>
                    Delivery Fee: <span>Free</span>
                  </li>
                </ul>
              </div>

              <div className="purchase-info">
                <button type="button" className="btn">
                  Rent now <i className="fas fa-shopping-cart"></i>
                </button>
                <button type="button" className="btn">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
