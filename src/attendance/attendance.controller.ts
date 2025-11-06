import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AttendanceService } from './attendance.service';

@Controller('api/attendance')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Post()
  mark(@Body() body) {
    return this.attendanceService.markAttendance(body.userId, body.status);
  }

  @Get('history/:userId')
  history(@Param('userId') id: string) {
    return this.attendanceService.history(Number(id));
  }

  @Get('summary/:userId')
  summary(@Param('userId') id: string) {
    return this.attendanceService.summary(Number(id));
  }
}
