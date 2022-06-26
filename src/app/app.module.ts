import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './question/question.component';
import { EnglishComponent } from './pages/english/english.component';
import { MathsComponent } from './pages/maths/maths.component';
import { ScienceComponent } from './pages/science/science.component';
import { SstComponent } from './pages/sst/sst.component';
import { GrammarComponent } from './pages/grammar/grammar.component';
import { GkComponent } from './pages/gk/gk.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionComponent,
    EnglishComponent,
    MathsComponent,
    ScienceComponent,
    SstComponent,
    GrammarComponent,
    GkComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
