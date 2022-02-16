import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [AuditComponent],
	imports: [
		CommonModule,
		AuditRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class AuditModule {}
