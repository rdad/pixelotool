//callWorker.js

// Returns a promise that resolves after a web worker sends its next message
export function nextWorkerMessage(worker, terminate = false) {
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

// Create a new web worker from a constructor, then pass the args in a
// postMessage. Returns a promise that resolves after its next message, and
// then terminates the worker.
export default function callWorker(workerConstructor, ...args) {
    let worker = new workerConstructor();
    const promise = nextWorkerMessage(worker, true);
    const message = [...args];
    // If there are multiple args, pass them as an array. If there's
    // only one, pass it by itself
    if (message.length > 1) {
        worker.postMessage([...args]);
    } else {
        worker.postMessage(args[0]);
    }
    return promise;
}