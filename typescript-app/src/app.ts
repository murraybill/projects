import {v4 } from 'uuid';

const uuid = v4();
console.log(uuid);

type Status = "open" | 'done' | 'discarted';

interface Todo<T> {
    description: string;
    status: Status;
    data: T;
}

interface Metadata {
    assignee: string;
}
const todo: Todo<Metadata> = {
    description: "TypeScript lernen",
    status: "open",
    data: { assignee: "Hans Clarin" }

}