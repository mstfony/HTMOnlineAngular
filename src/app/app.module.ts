import { DoktorFilterPipe } from './bolum/doktorFilter.pipe';
import { BolumFilterPipe } from './bolum/bolumFilter.pipe';

import { LaboratuvarFilterPipe } from './laboratuvar/laboratuvarFilter.pipe';
import { RouterModule } from '@angular/router';
import { MuayeneFilterPipe } from './muayene/muayeneFilter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { KimlikService } from './services/kimlik.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { KimlikComponent } from './kimlik/kimlik.component';
import { MuayeneComponent } from './muayene/muayene.component';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { LaboratuvarComponent } from './laboratuvar/laboratuvar.component';
import { BolumComponent } from './bolum/bolum.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavComponent,
    KimlikComponent,
    MuayeneComponent,
    MuayeneFilterPipe,
    LaboratuvarComponent,
    LaboratuvarFilterPipe,
    BolumFilterPipe,
    DoktorFilterPipe,
      BolumComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [KimlikService],
  bootstrap: [AppComponent],
})
export class AppModule {}
