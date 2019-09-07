declare module 'dispatch-type' {
	export enum DispatchType {
	    CLIENT = 0,
	    SERVER = 1,
	    BOTH = 2
	}

}
declare module 'web-socket-action' {
	import { DispatchType } from 'dispatch-type';
	export interface IWebSocketAction<T> {
	    type: string;
	    payload: T;
	    dispatchOn: DispatchType;
	}

}
declare module 'reactive-action-transport-data' {
	export * from 'web-socket-action';
	export * from 'dispatch-type';

}
