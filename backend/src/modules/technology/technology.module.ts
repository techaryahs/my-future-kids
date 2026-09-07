import { Module } from '@nestjs/common';
import { TechnologyController } from './technology.controller.js';
import { TechnologyService } from './technology.service.js';

@Module({
  controllers: [TechnologyController],
  providers: [TechnologyService],
  exports: [TechnologyService],
})
export class TechnologyModule {}
