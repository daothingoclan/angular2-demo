import { IBuilder } from "./ibuilder";
export class SingletonBuilder implements IBuilder {
    private item: any;
    constructor(item: any) {
        this.item = item;
    }
    public build() {
        if (!this.item.instance && this.item.mapTo) {
            this.item.instance = new this.item.mapTo();
        }
        return this.item.instance;
    }
}