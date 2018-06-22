import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const GOOGLE_MAPS_STATIC_URL = 'https://maps.googleapis.com/maps/api/staticmap?size=500x300&maptype=roadmap&markers=';
const GOOGLE_MAPS_API_KEY = '&key=AIzaSyDA-Pqh_zbJiUQ5W23YC9n7h3ByV2W1fUY';
const GOOGLE_MAPS_GEOCODING_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private httpClient: HttpClient) { }

  getCoordinates(order: Order): Observable<any> {
    const geocodingUrl = GOOGLE_MAPS_GEOCODING_URL + order.location1 + order.location2 + GOOGLE_MAPS_API_KEY;

    return this.httpClient.get<any>(geocodingUrl);
  }

  getGoogleApiUrls(myOrders: Order[]): Map<number, string> {
    const googleMapLocations = new Map<any, any>();

    for (const order of myOrders) {
      const googleMapUrl = GOOGLE_MAPS_STATIC_URL
      + order.location1 + ',' + order.location2
      + GOOGLE_MAPS_API_KEY;

      googleMapLocations.set(order.id, googleMapUrl);
    }

    return googleMapLocations;
  }

}
