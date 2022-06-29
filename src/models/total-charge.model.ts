import Vehicle from './vehicle.model';

export default class TotalCharge {
  public rateTotalAmount : string;

  public estimatedTotalAmount: string;

  public currencyCode: Vehicle[];

  constructor({ ...totalCharge }) {
    this.rateTotalAmount = totalCharge['@RateTotalAmount'];
    this.estimatedTotalAmount = totalCharge['@EstimatedTotalAmount'];
    this.currencyCode = totalCharge['@CurrencyCode'];
  }
}
