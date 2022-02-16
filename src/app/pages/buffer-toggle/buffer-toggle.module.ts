import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferToggleRoutingModule } from './buffer-toggle-routing.module';
import { BufferToggleComponent } from './buffer-toggle.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [BufferToggleComponent],
	imports: [
		CommonModule,
		BufferToggleRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class BufferToggleModule {}
