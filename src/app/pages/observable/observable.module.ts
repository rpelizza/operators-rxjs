import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [ObservableComponent],
	imports: [
		CommonModule,
		ObservableRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class ObservableModule {}
