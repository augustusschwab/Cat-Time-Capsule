import { UserData } from "./UserData";

export interface TimeCapsuleData {
    id: number | null,
    name: string,
    email: string,
    openDate: string,
    message: string,
    catUrl: string,
    assignedUserId: number | null,
    assignedUser: UserData | null,
}