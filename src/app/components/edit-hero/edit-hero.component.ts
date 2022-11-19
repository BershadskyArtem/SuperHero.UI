import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
  @Input() hero?:SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>;

  constructor(private superheroService:SuperHeroService){}

  ngOnInit():void{
    
  }

  updateHero(hero:SuperHero):void{
    this.superheroService
      .updateSuperHero(hero)
      .subscribe((hero)=> this.heroesUpdated.emit(hero));
  }

  deleteHero(hero:SuperHero):void{
    this.superheroService
      .RemoveSuperHero(hero)
      .subscribe((hero)=> this.heroesUpdated.emit(hero));
  }

  createHero(hero:SuperHero):void{
    this.superheroService
    .Create(hero)
    .subscribe((hero)=> this.heroesUpdated.emit(hero));
  }


}
