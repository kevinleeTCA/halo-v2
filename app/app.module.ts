import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component'
import { NavigationLHSComponent } from './navigation.LHS.component'
import { HeaderComponent } from './header.component'
import { ContentComponent } from './content.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TopicComponent } from './topic/topic.component'
import { CaseComponent } from './case/case.component'
import { DirectoryComponent } from './directory/directory.component'
import { TopicDetailComponent } from './topic/topicDetail.component'
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                children: []
            },
            {
                path: 'topics',
                component: TopicComponent,
                children: [{
                    path: ':id',
                    component: TopicDetailComponent
                }]
            },
            {
                path: 'cases',
                component: CaseComponent,
                children: []
            },
            {
                path: 'directories',
                component: DirectoryComponent,
                children: []
            }
        ])
        ],
    declarations: [AppComponent, NavigationLHSComponent, HeaderComponent, ContentComponent,
        DashboardComponent, TopicComponent, CaseComponent, DirectoryComponent, TopicDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
