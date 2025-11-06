import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async markAttendance(userId: number, status: string) {
    return this.prisma.attendance.create({
      data: { userId, status },
    });
  }

  async history(userId: number) {
    return this.prisma.attendance.findMany({ where: { userId } });
  }

  async summary(userId: number) {
    const data = await this.prisma.attendance.findMany({ where: { userId } });
    const total = data.length;
    const hadir = data.filter(d => d.status === 'hadir').length;
    return { total, hadir, persentase: `${(hadir / total) * 100}%` };
  }
}
