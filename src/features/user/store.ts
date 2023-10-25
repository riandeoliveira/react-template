class UserStore {
  public userList: string[];

  public constructor() {
    this.userList = [];
  }

  public setUserList(userList: string[]): void {
    this.userList = userList;
  }
}

export const userStore = new UserStore();
