import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { MaterialModule } from 'src/app/app.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MaterialModule,
  ]
})
export class RegistrationModule { }
