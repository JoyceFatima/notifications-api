import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotiticationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotiticationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotitication {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotiticationRequest,
  ): Promise<SendNotiticationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
