export default class WorkerUtils {
  worker: Worker;
  onValueCallback!: (num: any) => void;
  constructor() {
    this.worker = new Worker('./workers/example.worker.ts', { name: 'example-worker', type: 'module' });
    this.worker.onmessage = (event: any) => this.onmessage(event);
  }

  init(onValueCallback :any) {
    this.worker.postMessage({ type: 'load-wasm' })
    this.onValueCallback = onValueCallback;
  }

  getValue() { this.worker.postMessage({ type: 'get-value' }) };

  setValue(num: number) { this.worker.postMessage({ type: 'set-value', value: num }) };

  onmessage(event: any) {
    const { type } = event.data;
    switch (type) {
      case 'value-is-set':
        this.getValue();
        break;
      case 'value-is-received':
        this.onValueCallback(event.data.value);
        break;
    }
  }
}