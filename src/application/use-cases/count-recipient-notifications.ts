import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRecipientNotiticationRequest {
  recipientId: string;
}

interface CountRecipientNotiticationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotitications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotiticationRequest,
  ): Promise<CountRecipientNotiticationResponse> {
    const { recipientId } = request;

    const count =
      await this.notificationsRepository.countManyByRecipientId(recipientId);

    return { count };
  }
}
