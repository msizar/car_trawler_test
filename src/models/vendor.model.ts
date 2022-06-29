export default class Vendor {
  public code : string;

  public name: string;

  constructor({ ...vendorAvails }) {
    this.code = vendorAvails['@Code'];
    this.name = vendorAvails['@Name'];
  }
}
