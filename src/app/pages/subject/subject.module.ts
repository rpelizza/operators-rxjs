import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [SubjectComponent],
	imports: [
		CommonModule,
		SubjectRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class SubjectModule {}
