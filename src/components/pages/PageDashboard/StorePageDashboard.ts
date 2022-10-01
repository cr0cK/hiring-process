import StoreRoot from "../../../stores/StoreRoot";
import StoreBase from "../../../stores/StoreRoot/StoreBase";
import { IStoreOptions } from "../../../stores/types";
import { action, computed, makeObservable, observable } from "mobx";

export default class StorePageDashboard extends StoreBase {
  /**
   * Private
   */

  @observable
  private _userName: string = "Batman";

  constructor(storeRoot: StoreRoot, options: IStoreOptions) {
    super(storeRoot, options);
    makeObservable(this);
  }

  /**
   * Methods
   */

  /**
   * Actions
   */

  @action
  reset(): this {
    this._userName = "";

    return this;
  }

  @action
  setUserName(userName: string): this {
    this._userName = userName;
    return this;
  }

  /**
   * Computed
   */

  @computed
  get userName(): string {
    return this._userName;
  }
}
