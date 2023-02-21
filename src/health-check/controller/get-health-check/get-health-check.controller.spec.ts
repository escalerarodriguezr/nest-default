import { Test, TestingModule } from '@nestjs/testing';
import { GetHealthCheckController } from './get-health-check.controller';

describe('GetHealthCheckController', () => {
  let controller: GetHealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetHealthCheckController],
    }).compile();

    controller = module.get<GetHealthCheckController>(GetHealthCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
