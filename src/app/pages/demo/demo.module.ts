import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	declarations: [DemoComponent],
	imports: [
		CommonModule,
		DemoRoutingModule,
		MatProgressBarModule,
		MatGridListModule,
	],
})
export class DemoModule {}
