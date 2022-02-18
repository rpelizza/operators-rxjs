import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
	declarations: [DemoComponent],
	imports: [CommonModule, DemoRoutingModule, MatProgressBarModule],
})
export class DemoModule {}
