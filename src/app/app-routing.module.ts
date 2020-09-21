import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorListingComponent } from './components/vendor-listing/vendor-listing.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegistrationComponentComponent } from './components/registration-component/registration-component.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'listing', component: VendorListingComponent },
  { path: 'registration', component: RegistrationComponentComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
