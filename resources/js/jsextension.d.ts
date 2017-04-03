interface StringConstructor {
    format(...params: Array<any>): string;
}

interface Window {
    ioc: any;
}

interface Array<T> {
    firstOrDefault(callback: any): any;
}

interface Node {
    offsetHeight: any;
    getAttribute(attr: string): string;
}

interface Date {
    format(mask: any, utc: boolean): any;
}