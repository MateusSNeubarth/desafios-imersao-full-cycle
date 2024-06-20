import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';
import { PrismaModule } from '@app/core/prisma/prisma.module';
@Module({
  imports: [PrismaModule, EventsModule, SpotsModule],
})
export class Partner1Module {}
