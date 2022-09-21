import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contenedor } from '../models/contenedor';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Contenedor[]>{
    const url = this.apiUrl+'datos.php'
    return this.http.get<Contenedor[]>(url).pipe(map(data => data));
  }

  getAño(): Observable<Contenedor[]>{
    const url = this.apiUrl+'años.php'
    return this.http.get<Contenedor[]>(url).pipe(map(data => data));
  }

  getDia(): Observable<Contenedor[]>{
    const url = this.apiUrl+'dias.php'
    return this.http.get<Contenedor[]>(url).pipe(map(data => data));
  }

  getDiaMayor(): Observable<Contenedor[]>{
    const url = this.apiUrl+'diamayor.php'
    return this.http.get<Contenedor[]>(url).pipe(map(data => data));
  }

  getDiaMenor(): Observable<Contenedor[]>{
    const url = this.apiUrl+'diamenor.php'
    return this.http.get<Contenedor[]>(url).pipe(map(data => data));
  }

  getMesMayor(): Observable<Contenedor[]>{
    const url = this.apiUrl+'mesMayor.php'
    return this.http.get<Contenedor[]>(url).pipe(map(data => data));
  }

  getMesMenor(): Observable<Contenedor[]>{
    const url = this.apiUrl+'mesMenor.php'
    return this.http.get<Contenedor[]>(url).pipe(map(data => data));
  }

}
