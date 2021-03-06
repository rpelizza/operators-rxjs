import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'demo',
		loadChildren: () =>
			import('./pages/demo/demo.module').then((m) => m.DemoModule),
	},
	// {
	// 	path: 'subscription',
	// 	loadChildren: () =>
	// 		import('./pages/subscription/subscription.module').then(
	// 			(m) => m.SubscriptionModule
	// 		),
	// },
	// {
	// 	path: 'subject',
	// 	loadChildren: () =>
	// 		import('./pages/subject/subject.module').then(
	// 			(m) => m.SubjectModule
	// 		),
	// },
	// {
	// 	path: 'behavior-subject',
	// 	loadChildren: () =>
	// 		import('./pages/behavior-subject/behavior-subject.module').then(
	// 			(m) => m.BehaviorSubjectModule
	// 		),
	// },
	// {
	// 	path: 'replay-subject',
	// 	loadChildren: () =>
	// 		import('./pages/replay-subject/replay-subject.module').then(
	// 			(m) => m.ReplaySubjectModule
	// 		),
	// },
	// {
	// 	path: 'async-subject',
	// 	loadChildren: () =>
	// 		import('./pages/async-subject/async-subject.module').then(
	// 			(m) => m.AsyncSubjectModule
	// 		),
	// },
	// {
	// 	path: 'audit',
	// 	loadChildren: () =>
	// 		import('./pages/audit/audit.module').then((m) => m.AuditModule),
	// },
	// {
	// 	path: 'audit-time',
	// 	loadChildren: () =>
	// 		import('./pages/audit-time/audit-time.module').then(
	// 			(m) => m.AuditTimeModule
	// 		),
	// },
	// {
	// 	path: 'buffer',
	// 	loadChildren: () =>
	// 		import('./pages/buffer/buffer.module').then((m) => m.BufferModule),
	// },
	// {
	// 	path: 'buffer-count',
	// 	loadChildren: () =>
	// 		import('./pages/buffer-count/buffer-count.module').then(
	// 			(m) => m.BufferCountModule
	// 		),
	// },
	// {
	// 	path: 'buffer-time',
	// 	loadChildren: () =>
	// 		import('./pages/buffer-time/buffer-time.module').then(
	// 			(m) => m.BufferTimeModule
	// 		),
	// },
	// {
	// 	path: 'buffer-toggle',
	// 	loadChildren: () =>
	// 		import('./pages/buffer-toggle/buffer-toggle.module').then(
	// 			(m) => m.BufferToggleModule
	// 		),
	// },
	// {
	// 	path: 'buffer-when',
	// 	loadChildren: () =>
	// 		import('./pages/buffer-when/buffer-when.module').then(
	// 			(m) => m.BufferWhenModule
	// 		),
	// },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
