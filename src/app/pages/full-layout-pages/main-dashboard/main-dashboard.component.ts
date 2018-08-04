import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
  pokemonSrc: string[];
  pokemonName: string;
  currentPokemonShown: string;

  constructor() {
    this.pokemonSrc = ["Celebi", "Ditto", "Eevee", "Pikachu"];
    this.currentPokemonShown = this.getRandomPokemonName();
  }

  getPokemonImageAsset(pokemonName): string {
    return `assets/img/pokemon/${pokemonName}.jpg`;
  }

  getRandomPokemonName(): string {
    return this.pokemonSrc[Math.floor(Math.random() * 100 % this.pokemonSrc.length)];
  }

  onSubmit(pokemonName) {
    if (pokemonName === this.currentPokemonShown) {
      alert("Correct! It's " + pokemonName + "!");
      this.currentPokemonShown = this.getRandomPokemonName();
    } else {
      alert("Wrong! Try again");
    }
    this.pokemonName = "";
  }
}
