import { Test, TestingModule } from '@nestjs/testing';
import { GetHealthCheckByIdService } from './get-health-check-by-id.service';

describe('GetHealthCheckById', () => {
  let provider: GetHealthCheckByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetHealthCheckByIdService],
    }).compile();

    provider = module.get<GetHealthCheckByIdService>(GetHealthCheckByIdService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should response GetHealthCheckResponse', () => {
    const response = provider.handle('rafa')
    expect(response.name).toEqual('rafa')
    expect(response.email).toEqual('rafa@rafa.com')
  });
});
