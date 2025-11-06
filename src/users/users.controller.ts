import { Controller, Post, Body, Put, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() body) {
    return this.usersService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.usersService.update(Number(id), body);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }
}
