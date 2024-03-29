import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface CancelNotiticationRequest {
  notificationId: string;
}

type CancelNotiticationResponse = void;

@Injectable()
export class CancelNotitication {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CancelNotiticationRequest,
  ): Promise<CancelNotiticationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
