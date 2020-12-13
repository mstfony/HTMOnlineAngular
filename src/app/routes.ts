import { BolumComponent } from './bolum/bolum.component';
import { LaboratuvarComponent } from './laboratuvar/laboratuvar.component';
import { MuayeneComponent } from './muayene/muayene.component';
import { KimlikComponent } from './kimlik/kimlik.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: "kimlik", component: KimlikComponent },
  { path: "muayene/:id", component: MuayeneComponent },
  { path: "labSonuc/:id", component: LaboratuvarComponent },
  { path: "bolum", component: BolumComponent },
  { path: "bolum/doktor/:id", component: BolumComponent },
  {path:"**",redirectTo:"kimlik",pathMatch:"full"}
];
