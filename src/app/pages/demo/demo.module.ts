import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [DemoComponent],
	imports: [
		CommonModule,
		DemoRoutingModule,
		MatProgressSpinnerModule,
		MatCardModule,
		MatListModule,
		MatIconModule,
	],
})
export class DemoModule {}
