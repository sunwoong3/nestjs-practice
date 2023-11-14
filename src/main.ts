import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//어플리케이션 생성하고 실행 시작점
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
