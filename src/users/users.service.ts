import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(
        username: string, 
        password: string,
        firstName: string,
        lastName: string,
        gender: string,
        dateOfBirth: string,
    ): Promise<User> {
        return this.userModel.create({
            username, 
            password,
            firstName,
            lastName,
            gender,
            dateOfBirth
        });
    }

    async getUser({
        username, password
    }): Promise<User | undefined> {
        return this.userModel.findOne({
            username
        })
    }
}
