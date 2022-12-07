import * as mongoose from "mongoose";

const gender = {
    male: "Male",
    female: "Female"
};

export const UserSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true, select: false},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    gender: {type: String, enum: gender, default: gender.male, require: true},
    dateOfBirth: {type: String, require: true},
    registerDate: {type: Date, default: new Date()}
})

export interface User {
    username: string
    password: string
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: string
    registerDate: Date
}
