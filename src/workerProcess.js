
let worker_handler = null;

export function set( worker ){
	worker_handler = worker;
	return this;
}

export function get(){
	return worker;
}

export function send( ...args ){

	let worker 		= new worker_handler();
    const promise 	= nextWorkerMessage(worker, true);
    const message 	= [...args];
 
    if (message.length > 1) {
        worker.postMessage([...args]);
    } else {
        worker.postMessage(args[0]);
    }
    return promise;
}

function nextWorkerMessage(worker, terminate = false) {
    return new Promise((resolve, reject) => {
        worker.onmessage = ({data}) => {
            worker.onmessage = null;
            worker.onerror = null;
            if (terminate) worker.terminate();
            resolve(data);
        };
        worker.onerror = ({message}) => {
            worker.onmessage = null;
            worker.onerror = null;
            worker.terminate();
            reject(message);
        };
    });
}