import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, appConfig } from '@mahindar5/ng-common-mat-lib';

bootstrapApplication(AppComponent, appConfig)
	.catch((err) => console.error(err));
