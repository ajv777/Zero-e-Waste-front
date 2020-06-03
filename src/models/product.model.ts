export class Producto{
    nombre: string;
    descripcion: string;
    categoria: string;
    fotos: string;
    precio: number;
    correo: boolean;
    mano: boolean;
    fecha: Date;

    constructor (pNombre: string, pDescripcion: string, pCategoria: string, pFotos: string, pPrecio: number, pCorreo: boolean, pMano: boolean, pFecha: Date) {
        this.nombre = pNombre;
        this.descripcion = pDescripcion;
        this.categoria = pCategoria;
        this.fotos = pFotos;
        this.precio = pPrecio;
        this.correo = pCorreo;
        this.mano = pMano;
        this.fecha = pFecha;
    }
}

