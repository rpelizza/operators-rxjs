import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncSubjectRoutingModule } from './async-subject-routing.module';
import { AsyncSubjectComponent } from './async-subject.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [AsyncSubjectComponent],
	imports: [
		CommonModule,
		AsyncSubjectRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class AsyncSubjectModule {}
