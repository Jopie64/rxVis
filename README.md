# RxVis

> [!NOTE]
> **Status: Gearchiveerd / Archived (Read-Only)**  
> Dit project diende oorspronkelijk als visueel demonstratie-instrument om de kracht en elegantie van reactieve streamingconcepten (RxJS) inzichtelijk te maken voor collega-ontwikkelaars.  
> Met de komst van moderne online visualizers en AI-ondersteuning voor asynchrone streams is het doel van dit prototype bereikt.  
> Het project is als afsluiter gemoderniseerd naar Angular 22, Standalone Component Architecture en Vitest, en vervolgens gearchiveerd als historisch referentiepunt.

---

## Over dit project
RxVis is ontworpen om visueel inzichtelijk te maken wat er gebeurt tijdens reactieve operaties (RxJS). Het demonstreert hoe streams, operators (`map`, `filter`, `scan`, `switchMap`) en timing pipelines data vloeiend transformeren over een visueel raster.

## Configuratie & Uitbreiding
Zie `src/app/rxConfigs.ts` voor de definitie van Rx-configuraties en knooppunten die gerenderd worden via de `app-rx-drawer` component.

## Credits & Inspiratie
Geïnspireerd door het artikel:
[Learn to combine RxJS sequences with super intuitive interactive diagrams](https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511)
