export interface IUser{
    fullname: string | null;
    email?: string;
    phone?: number | null;
    [key: string]: any;
}