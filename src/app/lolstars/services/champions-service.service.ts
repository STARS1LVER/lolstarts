import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environments } from 'src/environments/environments';
import { AllChampions, Datum } from '../interfaces/all-champions.interface';

@Injectable({
  providedIn: 'root'
})
export class ChampionsServiceService {

  // *  url api
  private readonly baseUrl: string = environments.baseUrl

  constructor( private httpClient: HttpClient ) { }

  /**
   * This method retunr all champions of league of legends
   * @returns
   */
  public getAllChampions(): Observable<Datum[]> {
    return this.httpClient.get<AllChampions>(`${this.baseUrl}`)
    .pipe(
      map( response => response.data )
    )
  }





}
