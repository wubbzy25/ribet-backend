import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { ProductosMasVendidos } from './entities/productomasvendidos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosMasVendidos])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
