import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferCountRoutingModule } from './buffer-count-routing.module';
import { BufferCountComponent } from './buffer-count.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [BufferCountComponent],
	imports: [
		CommonModule,
		BufferCountRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class BufferCountModule {}
