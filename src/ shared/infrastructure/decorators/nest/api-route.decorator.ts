// shared/infrastructure/decorators/nest/api-route.decorator.ts
import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function ApiRoute(options: { summary: string; description: string; created: { type: any; description: string } }) {
    return applyDecorators(
        ApiOperation({ summary: options.summary, description: options.description }),
        ApiResponse({ status: 201, description: options.created.description, type: options.created.type }),
    );
}
