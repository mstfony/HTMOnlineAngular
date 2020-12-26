import { MatDatepickerModule, MatDatepickerToggleIcon } from '@angular/material/datepicker';
import { DoktorFilterPipe } from './bolum/doktorFilter.pipe';
import { BolumFilterPipe } from './bolum/bolumFilter.pipe';

import { LaboratuvarFilterPipe } from './laboratuvar/laboratuvarFilter.pipe';
import { RouterModule } from '@angular/router';
import { MuayeneFilterPipe } from './muayene/muayeneFilter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { KimlikService } from './services/kimlik.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { KimlikComponent } from './kimlik/kimlik.component';
import { MuayeneComponent } from './muayene/muayene.component';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { LaboratuvarComponent } from './laboratuvar/laboratuvar.component';
import { BolumComponent } from './bolum/bolum.component';
import { RandevuComponent } from './randevu/randevu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { Moment } from 'moment';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from "@angular/forms";
import {  NgbDateStruct,NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDialogComponent } from './randevu/add-dialog/add-dialog.component';
import { GlobalErrorHandler } from './core/global-error-handler';
import {AlertifyService} from './services/alertify.service'
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {NgxPrintModule} from 'ngx-print';

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
      BolumComponent,
      RandevuComponent,
      RandevuComponent,
      AddDialogComponent,
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatMomentDateModule,
    MatExpansionModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    MatStepperModule,
    MatSelectModule,
    MatCardModule,
    NgxPrintModule
    
  ],
  providers: [KimlikService,MatDatepickerModule,AlertifyService,{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
