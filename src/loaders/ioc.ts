import { MicroframeworkSettings } from 'microframework';
import { useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { useContainer as classValidatorUseContainer } from 'class-validator';

export function iocLoader(settings: MicroframeworkSettings) {
    routingUseContainer(Container);
    classValidatorUseContainer(Container);
};