import { Controller, Post, Body, UnauthorizedException, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerDto: { email: string; password: string }) {
    return this.authService.register(registerDto.email, registerDto.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('dashboard')
  getDashboard(@Request() req) {
    return { message: 'Bienvenido al dashboard!', user: req.user };
  }
}
