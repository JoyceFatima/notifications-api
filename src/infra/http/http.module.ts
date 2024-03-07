import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotitication } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotitication } from '@application/use-cases/cancel-notification';
import { ReadNotitication } from '@application/use-cases/read-notification';
import { UnreadNotitication } from '@application/use-cases/unread-notification';
import { CountRecipientNotitications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotitications } from '@application/use-cases/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotitication,
    CancelNotitication,
    ReadNotitication,
    UnreadNotitication,
    CountRecipientNotitications,
    GetRecipientNotitications,
  ],
})
export class HttpModule {}
