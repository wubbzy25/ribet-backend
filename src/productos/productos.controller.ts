import { Controller, Get } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productoService: ProductosService) {}
  @Get()
  ObtenerProductoMasVendido() {
    return this.productoService.ObtenerProductosMasVendidos();
  }
}
