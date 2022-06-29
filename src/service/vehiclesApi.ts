import axios, { AxiosPromise } from 'axios';

export const vehicleEndPoint = 'http://www.cartrawler.com/ctabe/cars.json';

export default function getVehAvailRSCoreData(): AxiosPromise {
  return axios.get(vehicleEndPoint, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
