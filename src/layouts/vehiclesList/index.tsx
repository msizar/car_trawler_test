import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Filter from '../../components/filter';
import Sort from '../../components/sort';
import VehicleCard from '../../components/vehicleCard';
import sortVehicleList from '../../helpers/sortingList';
import SortTypeEnum from '../../models/sort-types.enum';
import TrawlerListings from '../../models/trawler-listings.model';
import Vehicle from '../../models/vehicle.model';
import Data from '../../models/vehicleMock';
import Vendor from '../../models/vendor.model';

function Header() {
  return (
    <div className="header">
      <h1>Car Trawler</h1>
    </div>
  );
}

const VehiclesList: FC = () => {
  const trawlerMock = Data.VehAvailRSCore.VehVendorAvails;
  const trawlerListings: TrawlerListings[] = useMemo(
    () => trawlerMock.map((trawler) => new TrawlerListings(trawler)),
    [trawlerMock]
  );
  const [allVehicles, setAllVehicles] = useState<Vehicle[]>([]);
  const [sortType, setSortType] = useState<SortTypeEnum>(SortTypeEnum.LowPrice);
  const [filterType, setFilterType] = useState<Vendor | string>();

  /**
   * Initialize data
   */
  const getAllVehicles = useCallback(
    (filterType?: Vendor | string): void => {
      let allVehicles: Vehicle[] = [];

      trawlerListings.forEach((trawler) => {
        const { vehicle, vendor } = trawler;
        allVehicles = [
          ...vehicle.map((vehicle) => ({ ...vehicle, vendor })),
          ...allVehicles,
        ];

        if (filterType) {
          allVehicles = allVehicles.filter((vehicle) => {
            return vehicle.vendor?.code === filterType;
          });
        }
      });

      setAllVehicles(sortVehicleList(sortType, allVehicles));
    },
    [trawlerListings, sortType]
  );

  useEffect(() => {
    getAllVehicles(filterType);
  }, [getAllVehicles, sortType, filterType]);

  return (
    <div>
      <Header />
      <div>
        <div className="sortSection">
          <h3>{allVehicles?.length} vehicles available to rent</h3>
          <div className="filters">
            <Sort filter={setSortType} defaultSortType={sortType} />
            <Filter
              filter={setFilterType}
              filterOptions={trawlerListings.map((trawler) => trawler.vendor)}
            />
          </div>
        </div>

        <div className="container animate__animated animate__fadeIn">
          {allVehicles && allVehicles?.length > 0 ? (
            allVehicles.map((vehicle: Vehicle, i) => (
              <VehicleCard vehicle={vehicle} key={i} />
            ))
          ) : (
            <h1>No Vehicle Available</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehiclesList;
