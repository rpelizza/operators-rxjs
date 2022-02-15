import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubjectRoutingModule } from './behavior-subject-routing.module';
import { BehaviorSubjectComponent } from './behavior-subject.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [BehaviorSubjectComponent],
	imports: [
		CommonModule,
		BehaviorSubjectRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class BehaviorSubjectModule {}
