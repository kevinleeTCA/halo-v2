import { Component, OnInit } from '@angular/core';
import { TopicService } from './topic.service';
import { Topic } from './topic';

@Component({
    selector: 'topic',
    template: `
        <div>Topic</div>
        <ul>
            <li *ngFor="let topic of topics">
                <a routerLink="/topics/{{topic.id}}">{{topic.name}}</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,
    styles: [`

    `],
    providers: [TopicService]
})
export class TopicComponent implements OnInit{
    abstract;
    topics: Topic[];

    constructor(private topicService:TopicService) {
    }

    getTopics(){
        this.topicService.getTopics().then((topics)=>{
            this.topics = topics;
        }, (error)=>{
            console.error(error);
        });
    }

    ngOnInit(){
        this.getTopics();
    }
}