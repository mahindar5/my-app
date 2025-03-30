import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig,AuthGuard,configureApplication } from '@mahindar5/ng-common-mat-lib';
import { AppComponent } from '@mahindar5/ng-common-mat-lib';
import { Routes } from '@angular/router';
export const routes: Routes = [
	{ path: '', redirectTo: 'ai-chat', pathMatch: 'full' },
	// {
	// 	path: 'ai-dashboard',
	// 	loadComponent: () => import('./ai-dashboard/ai-dashboard.component').then(m => m.AiDashboardComponent),
	// 	children: [
	// 		{ path: '', redirectTo: 'ai-agent', pathMatch: 'full' },
	// 		{
	// 			path: 'ai-agent',
	// 			loadComponent: () => import('./ai-dashboard/ai-agent/ai-agent.component').then(m => m.AiAgentComponent),
	// 		},
	// 		{
	// 			path: 'ai-chat',
	// 			loadComponent: () => import('./ai-dashboard/ai-chat/ai-chat.component').then(m => m.AiChatComponent),
	// 		},
	// 		{
	// 			path: 'settings',
	// 			loadComponent: () => import('./ai-dashboard/settings/settings.component').then(m => m.SettingsComponent),
	// 		},
	// 	],
	// },
	{
		path: 'login',
		loadComponent: () => import('@mahindar5/ng-common-mat-lib').then(m => m.LoginComponent),
	},
	{
		path: 'ai-chat',
		canActivate: [AuthGuard],
		loadComponent: () => import('@mahindar5/ng-common-mat-lib').then(m => m.AiChatComponent),
	},
	{
		path: 'ai-agent',
		loadComponent: () => import('@mahindar5/ng-common-mat-lib').then(m => m.AiAgentComponent),
	},
	{
		path: 'settings',
		loadComponent: () => import('@mahindar5/ng-common-mat-lib').then(m => m.SettingsComponent),
	},
	{
		path: 'ng-common-mat-lib',
		loadChildren: () => import('@mahindar5/ng-common-mat-lib').then(m => m.NgCommonMatLibComponent),
	}
];

bootstrapApplication(AppComponent, configureApplication(routes))
  .catch((err) => console.error(err));
