import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor (
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUserCredantials (username: string, password: string): Promise<any> {
        const user = await this.usersService.getUser({username, password});

        return user || null;
    }

    async loginWithCredentials (user: any) {
        const payload = {username: user.username, password: user.password};
        
        return {
            access_token: this.jwtService.sign(payload),
            user
        }
    }
}
