import {Controller, Get, Param} from '@nestjs/common';
import {GetHealthCheckByIdService} from "../../service/get-health-check-by-id/get-health-check-by-id.service";
import {GetHealthCheckByIdResponse} from "../../service/get-health-check-by-id/get-health-check-by-id-response";

@Controller()
export class GetHealthCheckController {


    constructor(
        private readonly service:GetHealthCheckByIdService
    ) {
    }

    @Get('health-check/:id')
    public async action(
        @Param('id') id:string
    ): Promise<GetHealthCheckByIdResponse>
    {
        return this.service.handle(
            id
        );
    }

}
