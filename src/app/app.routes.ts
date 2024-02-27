import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import path from "path";
import { HomeComponent } from "./pages/home/home.component";
import { PokedexComponent } from "./pages/pokedex/pokedex.component";
import { TacticalComponent } from "./pages/tactical/tactical.component";
import { CollectionComponent } from "./pages/collection/collection.component";
import { AboutComponent } from "./pages/about/about.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pokedex", component: PokedexComponent },
  { path: "tactical", component: TacticalComponent },
  { path: "collection", component: CollectionComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent },
];
