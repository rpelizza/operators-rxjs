import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditTimeRoutingModule } from './audit-time-routing.module';
import { AuditTimeComponent } from './audit-time.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [AuditTimeComponent],
	imports: [
		CommonModule,
		AuditTimeRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class AuditTimeModule {}
