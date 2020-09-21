import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { VendorListingComponent } from './components/vendor-listing/vendor-listing.component';
import { DataService } from './data/data.service';
import { DeleteVendorComponent } from './components/delete-vendor/delete-vendor.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegistrationComponentComponent } from './components/registration-component/registration-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    VendorListingComponent,
    DeleteVendorComponent,
    AddVendorComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    MatPaginatorModule
  ],
  entryComponents: [
    AddVendorComponent
  ],
  providers: [DataService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
