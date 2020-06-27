export interface IUuseModel {
  username: string
  avatar: string
  realname: string
}

export class UserModel implements IUuseModel {
  username!: string;
  avatar!: string;
  realname!: string;
}
