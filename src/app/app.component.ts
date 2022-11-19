import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes : SuperHero[] = [];
  selectedHero? : SuperHero;
  
  constructor(private _superHeroService:SuperHeroService){
    
  }

  ngOnInit() : void{
    this._superHeroService.getSuperHeroes().subscribe((result:SuperHero[])=>{
      this.heroes = result;
    })
    console.log(this.heroes);
  }

  initNewHero():void{
    this.selectedHero = new SuperHero();
  }

  updateHeroList(newHeroes : SuperHero[]):void{
    this.heroes = newHeroes;
  }

  editHero(hero:SuperHero):void{
    this.selectedHero = hero;
  }
}
