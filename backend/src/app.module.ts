import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MembersModule } from './members/members.module';
import { FinancesModule } from './finances/finances.module';
import { SermonsModule } from './sermons/sermons.module';
import { InventoryModule } from './inventory/inventory.module';
import { MinistriesModule } from './ministries/ministries.module';

@Module({
  imports: [UsersModule, MembersModule, FinancesModule, SermonsModule, InventoryModule, MinistriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
