import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplaySubjectRoutingModule } from './replay-subject-routing.module';
import { ReplaySubjectComponent } from './replay-subject.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [ReplaySubjectComponent],
	imports: [
		CommonModule,
		ReplaySubjectRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class ReplaySubjectModule {}
