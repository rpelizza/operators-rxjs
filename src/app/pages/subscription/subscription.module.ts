import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [SubscriptionComponent],
	imports: [
		CommonModule,
		SubscriptionRoutingModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
	],
})
export class SubscriptionModule {}
