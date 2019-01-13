import { AuthResource } from './resources/auth';
import { CommonModule } from './common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceModule } from '@ngx-resource/handler-ngx-http'
import { CustomResourceHandler } from './resources/common/CustomResourceHandler';
import { ResourceHandler } from '@ngx-resource/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from './common/services/auth.service';
import { MatSnackBar, GestureConfig } from '@angular/material';
import { StartupService } from './common/services/startup.service';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ResourceModule.forRoot({handler: { provide: ResourceHandler, useClass: CustomResourceHandler, deps: [HttpClient, AuthService, MatSnackBar] }}),
  ],
  providers: [
    AuthResource,
    AuthService,
    StartupService,
    {
        // Provider for APP_INITIALIZER
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [StartupService],
        multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
