interface StringConstructor {
    format(...params: Array<any>): string;
}

interface Window {
    ioc: any;
}

interface Array<T> {
    firstOrDefault(callback: any): any;
}