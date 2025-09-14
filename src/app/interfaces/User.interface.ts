import { Model } from "mongoose";


export interface userInterface{
    firstName: String;
    lastName:String;
    email:String;
    password: String;
    role: "USER" | "ADMIN"
}


// export interface userInterfaceMethod {
//   hashPassword(password: string): Promise<string>;
// }

// export interface userStaticMethod extends Model<userInterface> {
//   hashPassword(password: string): Promise<string>;
// }