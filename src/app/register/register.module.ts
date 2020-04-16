import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { RegisterComponent } from './register.component';
import { registerRoutes } from './register.routing';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(registerRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [RegisterComponent]
})

export class RegisterModule {}
