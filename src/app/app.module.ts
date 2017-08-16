import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RouterModule, Routes } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
    ])

  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
