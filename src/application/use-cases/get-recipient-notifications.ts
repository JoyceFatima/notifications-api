import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

interface GetRecipientNotiticationRequest {
  recipientId: string;
}

interface GetRecipientNotiticationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotitications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotiticationRequest,
  ): Promise<GetRecipientNotiticationResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
