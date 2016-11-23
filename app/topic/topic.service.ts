import {Injectable} from "@angular/core";
import Topic from './topic'

const TOPICS:Topic[] = [
    {id: 1, name: 'hello world'},
    {id: 2, name: 'topic 2'},
    {id: 3, name: 'topic 3'}
];

@Injectable()
export class TopicService {
    getTopics(): Promise<Topic[]> {
        return Promise.resolve(TOPICS);
    }
};



