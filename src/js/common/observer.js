/**
 * observer class
 */
export class Observer {
	constructor() {
		this.observers = [];
	}

	/* 
	 * subscribe method 
	 */
	subscribe(observer) {
		this.observers.push(observer);
	}

	/* 
	 * unsubscribe method 
	 */
	unsubscribe(observer) {
		this.observers = this.observers.filter((subscriber) => subscriber !== observer);
	}

	/* 
	 * notify method
	 * is listening the subject
	 */
	notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
