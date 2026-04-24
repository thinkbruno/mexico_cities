import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    private readonly API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getStates(): Observable<any[]> {
        return this.http.get<any[]>(`${this.API_URL}/states`);
    }

    getCitiesByState(stateId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.API_URL}/states/${stateId}/cities`);
    }
}