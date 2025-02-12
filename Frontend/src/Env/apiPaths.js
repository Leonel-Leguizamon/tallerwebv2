import endpoints from './endpoints';
import environment from './environment';

const apiPaths = {
  findCars: `${environment.hostBackend}${endpoints.CARS.MAIN}`,
  findByCategory: `${environment.hostBackend}${endpoints.CARS.CATEGORY}`,
  findTopRated: `${environment.hostBackend}${endpoints.CARS.TOPRATED}`,
  findByMake: `${environment.hostBackend}${endpoints.CARS.MAKE}`,
  
  findCities: `${environment.hostBackend}${endpoints.CITIES}`,

  createBooking: `${environment.hostBackend}${endpoints.BOOKINGS.MAIN}`,
  deleteBooking: `${environment.hostBackend}${endpoints.BOOKINGS.WPARAMS}`,
  getBookings: `${environment.hostBackend}${endpoints.BOOKINGS.MAIN}`,
  
  loginUser: `${environment.hostBackend}${endpoints.USER.MAIN}`,

  getReviews: `${environment.hostBackend}${endpoints.REVIEWS.MAIN}`
};

const m = {
  p: 'POST',
  p_: 'PUT',
  g: 'GET',
  d: 'DELETE'
};
const endpointMethods = {
  findCars: m.p,
  findByCategory: m.g,
  findTopRated: m.g,
  findByMake: m.g,
  findCities: m.g,
  createBooking: m.p,
  deleteBooking: m.d,
  getBookings: m.g,
  loginUser: m.p,
  getReviews: m.g,
};


export {apiPaths, endpointMethods};
