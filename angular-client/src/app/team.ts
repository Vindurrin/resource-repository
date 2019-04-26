import { Resource } from './resource';

export class Team
{
    id: number;
    name: string;
    resources: Array<Resource>;
    status: string;
    start: string;
    end: string;
    project: Array<string>;
}