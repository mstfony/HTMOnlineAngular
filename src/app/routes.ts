import { ReservedComponent } from './randevu/reserved/reserved.component';
import { LoginGuard } from './core/login-guard';
import { LoginComponent } from './login/login.component';
import { RandevuComponent } from './randevu/randevu.component';
import { BolumComponent } from './bolum/bolum.component';
import { LaboratuvarComponent } from './laboratuvar/laboratuvar.component';
import { MuayeneComponent } from './muayene/muayene.component';
import { KimlikComponent } from './kimlik/kimlik.component';
import { Routes } from '@angular/router';
import { NobetciEczaneComponent } from './nobetci-eczane/nobetci-eczane.component';

export const appRoutes: Routes = [
  { path: "kimlik", component: KimlikComponent },
  { path: "muayene", component: MuayeneComponent,canActivate:[LoginGuard] },
  { path: "labSonuc/:id", component: LaboratuvarComponent,canActivate:[LoginGuard] },
  { path: "bolum", component: BolumComponent },
  { path: "bolum/doktor/:id", component: BolumComponent },
  { path: "randevu", component: RandevuComponent },
  { path: "nobetci-eczane", component: NobetciEczaneComponent },
  { path: "login", component: LoginComponent },
  { path: "gecmis-randevular", component: ReservedComponent,canActivate:[LoginGuard] },
  {path:"**",redirectTo:"randevu",pathMatch:"full"}
];
