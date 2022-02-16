import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferTimeRoutingModule } from './buffer-time-routing.module';
import { BufferTimeComponent } from './buffer-time.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [BufferTimeComponent],
	imports: [
		CommonModule,
		BufferTimeRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class BufferTimeModule {}
