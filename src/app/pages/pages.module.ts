import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { FixedpluginModule } from '../shared/fixedplugin/fixedplugin.module';
import { FooterModule } from '../shared/footer/footer.module';

import { PagesRoutes } from './pages.routing';

import { UserComponent } from './userpage/user.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NavbarModule,
    SidebarModule,
    FixedpluginModule,
    FooterModule,
  ],
  declarations: [
    UserComponent,
    TimelineComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  exports: [
    AuthLayoutComponent
  ]
})

export class PagesModule { }
