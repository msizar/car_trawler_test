import Vehicle from './vehicle.model';
import Vendor from './vendor.model';

export default class TrawlerListings {
  public vendor : Vendor;

  public vehicle : Vehicle[];

  constructor({ ...trawlerList }) {
    this.vendor = new Vendor(trawlerList.Vendor);
    this.vehicle = trawlerList.VehAvails.map((veh: Vehicle) => new Vehicle(veh));
  }
}
