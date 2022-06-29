import TotalCharge from './total-charge.model';
import Vendor from './vendor.model';

export default class Vehicle {
  public status : string;

  public fuelType: string;

  public driveType: number;

  public passengerQuantity: number;

  public baggageQuantity: number;

  public code: string;

  public codeContext: string;

  public doorCount: number;

  public vehMakeModel: string;

  public pictureURL: string;

  public transmissionType: string;

  public totalCharge: TotalCharge;

  public vendor?: Vendor;

  constructor({ ...vehicleData }) {
    this.status = vehicleData['@Status'];
    this.fuelType = vehicleData.Vehicle['@FuelType'];
    this.driveType = vehicleData.Vehicle['@DriveType'];
    this.passengerQuantity = vehicleData.Vehicle['@PassengerQuantity'];
    this.baggageQuantity = vehicleData.Vehicle['@BaggageQuantity'];
    this.code = vehicleData.Vehicle['@Code'];
    this.codeContext = vehicleData.Vehicle['@CodeContext'];
    this.doorCount = vehicleData.Vehicle['@DoorCount'];
    this.vehMakeModel = vehicleData.Vehicle?.VehMakeModel['@Name'] || '';
    this.pictureURL = vehicleData.Vehicle['PictureURL'];
    this.transmissionType = vehicleData.Vehicle['@TransmissionType'];
    this.totalCharge = new TotalCharge(vehicleData.TotalCharge);
    this.vendor = new Vendor({})
  }
}
