import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StarterComponent } from './components/starter/starter.component';
import { AuthcodeComponent } from './components/authcode/authcode.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AllquesComponent } from './homecompo/allques/allques.component';
import { MockComponent } from './homecompo/mock/mock.component';
import { SearchComponent } from './homecompo/search/search.component';
import { SavedquesComponent } from './homecompo/savedques/savedques.component';
import { MyprogressComponent } from './homecompo/myprogress/myprogress.component';
import { AboutusComponent } from './homecompo/aboutus/aboutus.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    AuthcodeComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotpasswordComponent,
    AllquesComponent,
    MockComponent,
    SearchComponent,
    SavedquesComponent,
    MyprogressComponent,

    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
