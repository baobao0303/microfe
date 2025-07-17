import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PortalModule } from './app/portal.module';

platformBrowserDynamic()
  .bootstrapModule(PortalModule)
  .catch((err) => console.error(err));
