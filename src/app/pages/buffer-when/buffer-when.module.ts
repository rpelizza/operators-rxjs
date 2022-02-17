import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferWhenRoutingModule } from './buffer-when-routing.module';
import { BufferWhenComponent } from './buffer-when.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [BufferWhenComponent],
	imports: [
		CommonModule,
		BufferWhenRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class BufferWhenModule {}
