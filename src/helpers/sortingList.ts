import SortTypeEnum from "../models/sort-types.enum";
import Vehicle from "../models/vehicle.model";

const sortVehicleList = (sortType: string, allVehicles: Vehicle[]) => {
  switch (sortType) {
    case SortTypeEnum.Za: //Sort alphabetical order Z-As
      return allVehicles.sort(
        (a, b) => -1 * a.vehMakeModel.localeCompare(b.vehMakeModel)
      );

    case SortTypeEnum.LowPrice:  //Sort from lowest price to highest
      return allVehicles.sort((a, b) => parseFloat(a.totalCharge.estimatedTotalAmount) - parseFloat(b.totalCharge.estimatedTotalAmount));
    
    case SortTypeEnum.HiPrice: //Sort from highest price to lowest
        return allVehicles.sort((a, b) => {
          return parseInt(a.totalCharge.estimatedTotalAmount) - parseInt(b.totalCharge.estimatedTotalAmount);
      });
      
    default:  //Sort alphabetical order A-Z
      return allVehicles.sort((a, b) =>
        a.vehMakeModel.localeCompare(b.vehMakeModel)
      );
  }
};
export default sortVehicleList