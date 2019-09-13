import {DispatchType} from './dispatch-type';

export interface IWebSocketAction<T> {
    type: string;
    payload?: T;
    dispatchOn: DispatchType;
}
