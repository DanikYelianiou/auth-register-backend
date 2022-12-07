import { Controller, Body, Post, UseGuards, Get, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('signUp')
    async createUser (
        @Body("username") username: string,
        @Body("password") password: string,
        @Body("firstName") firstName: string,
        @Body("lastName") lastName: string,
        @Body("gender") gender: string,
        @Body("dateOfBirth") dateOfBirth: string,
    ) {
        return this.userService.createUser(username, password, firstName, lastName, gender, dateOfBirth)
    }

    // @UseGuards(AuthGuard('jwt'))
    @Get('users/me')
    async getMyUser(@Query() query) {
        return this.userService.getUser(query);
    }
}
