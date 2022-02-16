import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferRoutingModule } from './buffer-routing.module';
import { BufferComponent } from './buffer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [BufferComponent],
	imports: [
		CommonModule,
		BufferRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class BufferModule {}
