/*
 * action = {
 *   type: "CREATE_EVENT",
 *   title: "2020東京オリンピックのお知らせ",
 *   body: "2020年に東京オリンピックを開催します！つきましては、、、。"
 * }
 * state = []
 * state = [
 *     {id: 1, title: "title1", body: "body1"}
 * ]
 * */

export enum EventType {
    CREATE_EVENT = 'CREATE_EVENT',
    DELETE_EVENT = 'DELETE_EVENT',
    DELETE_ALL_EVENTS = 'DELETE_ALL_EVENTS'
}

export type Event = {
    id: number;
    title: string;
    body: string;
};
export type EventsAction = {
    type: EventType;
    id?: number;
    title?: string;
    body?: string;
};

const events = (state: Event[] = [], action: EventsAction): Event[] => {
    switch (action.type) {
        case EventType.CREATE_EVENT: {
            const event = { title: action.title, body: action.body };
            const length = state.length;
            const id = length === 0 ? 1 : state[length - 1].id + 1;
            return [...state, { id: id, ...event }];
        }
        case EventType.DELETE_EVENT: {
            return state.filter((event) => event.id !== action.id);
        }
        case EventType.DELETE_ALL_EVENTS:
            return [];
        default:
            return state;
    }
};

export default events;
