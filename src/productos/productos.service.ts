import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductosMasVendidos } from './entities/productomasvendidos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(ProductosMasVendidos)
    private ProductosMasVendidosRepository: Repository<ProductosMasVendidos>,
  ) {}

  ObtenerProductosMasVendidos() {
    return this.ProductosMasVendidosRepository.find();
  }
}
