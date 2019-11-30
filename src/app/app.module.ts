import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularFireModule,FirebaseOptionsToken } from 'angularfire2';  
import { AngularFirestoreModule,   } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { ExperienceComponent } from './experience/experience.component';
import { BlogComponent } from './research/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent},  
  { path: 'research', component: BlogComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    MatProgressBarModule, FormsModule, MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


