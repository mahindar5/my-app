import { bootstrapApplication } from '@angular/platform-browser';
import { fetchProxy } from '@mahindar5/common-lib';
import { AppComponent, appConfig } from '@mahindar5/ng-common-mat-lib';

fetchProxy();
bootstrapApplication(AppComponent, appConfig)
	.catch((err) => console.error(err));
