import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { EventoshtmlComponent } from './eventoshtml/eventoshtml.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemplosBoostrapComponent } from './ejemplos-boostrap/ejemplos-boostrap.component';
import { PipeComponent } from './pipe/pipe.component';
import { ContinuaraPipe } from './continuara.pipe';
import { Error404Component } from './error404/error404.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UserEditComponent } from './usuarios/user-edit/user-edit.component';
import { UserAddComponent } from './usuarios/user-add/user-add.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    EventoshtmlComponent,
    DirectivasComponent,
    EjemplosBoostrapComponent,
    PipeComponent,
    ContinuaraPipe,
    Error404Component,
    MenuHeaderComponent,
    UsuariosComponent,
    UserEditComponent,
    UserAddComponent,
    ArticleComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
