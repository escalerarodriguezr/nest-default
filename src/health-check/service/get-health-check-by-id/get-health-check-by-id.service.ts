import {Injectable} from '@nestjs/common';
import {GetHealthCheckByIdResponse} from "./get-health-check-by-id-response";

@Injectable()
export class GetHealthCheckByIdService {

    public handle(
        name:string
    ):GetHealthCheckByIdResponse
    {
        return new GetHealthCheckByIdResponse(
           name,
           `${name}@${name}.com`
       );
    }

}
