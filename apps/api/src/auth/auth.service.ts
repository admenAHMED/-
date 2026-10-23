import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(input: { email: string; password: string; firstName?: string; lastName?: string }) {
    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        passwordHash: input.password,
        firstName: input.firstName,
        lastName: input.lastName,
      },
    });

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      message: 'User registered successfully',
    };
  }

  async login(input: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!user || user.passwordHash !== input.password) {
      throw new Error('Invalid credentials');
    }

    return {
      accessToken: `mock-access-token-for-${user.email}`,
      refreshToken: `mock-refresh-token-for-${user.email}`,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }
}
