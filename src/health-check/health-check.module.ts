import { Module } from '@nestjs/common';
import { GetHealthCheckController } from './controller/get-health-check/get-health-check.controller';
import { GetHealthCheckByIdService } from './service/get-health-check-by-id/get-health-check-by-id.service';

@Module({
  controllers: [GetHealthCheckController],
  providers: [GetHealthCheckByIdService]
})
export class HealthCheckModule {}
