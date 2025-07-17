import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EcommerceModule } from './app/ecommerce.module';

platformBrowserDynamic()
  .bootstrapModule(EcommerceModule)
  .catch((err) => console.error(err));
