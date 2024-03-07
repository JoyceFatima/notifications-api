import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface ReadNotiticationRequest {
  notificationId: string;
}

type ReadNotiticationResponse = void;

@Injectable()
export class ReadNotitication {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ReadNotiticationRequest,
  ): Promise<ReadNotiticationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
