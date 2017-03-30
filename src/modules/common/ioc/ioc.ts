import { IBuilder } from "./builder/ibuilder";
import { SingletonBuilder } from "./builder/singletonBuilder";

export enum IoCLifeCycle {
    Singleton,
    Transient
}

export class IoCFactory {
    public static create() {
        return new IoCContainer();
    }
}

export class IoCContainer {
    private registrations: Array<any> = [];

    public import(registrations: Array<any>) {
        this.registrations = registrations;
    }

    public registerInstance(name: string, object: any) {
        this.registrations.push({
            name: name,
            lifecycle: IoCLifeCycle.Singleton,
            instance: object
        });
    }

    public resolve(obj: any) {
        if (typeof (obj) == "function") {
            return this.resolveAngularProvider(obj);
        }

        let item = this.registrations.firstOrDefault((item: any) => { return item.name == obj; });
        let builder: IBuilder = this.getBuilder(item);
        return builder.build();
    }

    private resolveAngularProvider(type: any): any {
        let injector = this.resolve("IInjector");
        return injector.get(type);
    }

    private getBuilder(item: any) {
        switch (item.lifecycle) {
            case IoCLifeCycle.Singleton:
            default:
                return new SingletonBuilder(item);
        }
    }
}
