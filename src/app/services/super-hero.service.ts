import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "SuperHero";

  constructor(private http: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>(`https://localhost:7171/api/${this.url}`);
  }

  public updateSuperHero(hero:SuperHero) : Observable<SuperHero[]>{
    return this.http.put<SuperHero[]>(`https://localhost:7171/api/${this.url}`, hero );
  }

  public RemoveSuperHero(hero:SuperHero):Observable<SuperHero[]>{
    return this.http.delete<SuperHero[]>(`https://localhost:7171/api/${this.url}/${hero.id}`)
  }

  public Create(hero:SuperHero):Observable<SuperHero[]>{
    return this.http.post<SuperHero[]>(`https://localhost:7171/api/${this.url}`, hero);
  }

}
