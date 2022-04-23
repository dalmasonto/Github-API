import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { HomesComponent } from './pages/homes/homes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UsersComponent } from './pages/github/users/users.component';
import { UserviewComponent } from './pages/github/users/userview/userview.component';
import { ReposComponent } from './pages/github/repos/repos.component';
import { RepoviewComponent } from './pages/github/repos/repoview/repoview.component';
import { GithubComponent } from './pages/github/github.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CustomRoutingRoutingModule } from './custom-routing/custom-routing-routing.module';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { UserpaginatorComponent } from './components/userpaginator/userpaginator.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    NavbarComponent,
    LoaderComponent,
    AboutComponent,

    UsersComponent,
    UserviewComponent,
    ReposComponent,
    RepoviewComponent,
    GithubComponent,
    NotfoundComponent,
    UserComponent,
    UserpaginatorComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CustomRoutingModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
