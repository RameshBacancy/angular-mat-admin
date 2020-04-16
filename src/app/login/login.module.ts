import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routing';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(loginRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent]
})

export class LoginModule {}
