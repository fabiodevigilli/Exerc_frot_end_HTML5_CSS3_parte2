import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './paginainicial.component';

@NgModule({
    declarations: [
        PaginaInicialComponent
    ],
    imports: [
        CommonModule,
        RouterModule
        // EmployeeRoutingModule,
        // FormsModule,
        // ReactiveFormsModule
    ],
    providers: [
        // EmployeeService,
        // EmployeeGuard
    ]
})
export class PaginaInicialModule {}