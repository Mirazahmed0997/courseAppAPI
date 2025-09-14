import { Types } from "mongoose";
export interface coursesInterface {
    title: String;
    description: String;
    price: Number;
    instructor: String;
    user: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=Course.interface.d.ts.map