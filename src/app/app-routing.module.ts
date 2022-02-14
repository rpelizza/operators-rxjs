import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'observable',
		loadChildren: () =>
			import('./pages/observable/observable.module').then(
				(m) => m.ObservableModule
			),
	},
	{
		path: 'subscription',
		loadChildren: () =>
			import('./pages/subscription/subscription.module').then(
				(m) => m.SubscriptionModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
