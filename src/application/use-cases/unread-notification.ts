import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface UnreadNotiticationRequest {
  notificationId: string;
}

type UnreadNotiticationResponse = void;

@Injectable()
export class UnreadNotitication {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotiticationRequest,
  ): Promise<UnreadNotiticationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
