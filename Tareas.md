### BACK
- Crear base de datos (db) y hacer relaciones entre las tablas:
    - Users
    - Items
    - Category
- Insertar datos en la db para hacer pruebas
- Plantear Querys para el modelo:
    - select * from users
    - select * from items
    - ....
- Crear la app en Express
    - Definir las rutas y peticiones de la API (devuelven json)
        - GET http://localhost:3000/API/clientes
        - ...
    - Probar las peticiones en un fichero PruebasAPI.rest
    - Incluir middleware para el login/registro
        - Agregar Token (jsonwebtoken)
- Enganchar API con el proyecto de Angular
    - En el proyecto de Angular, crear los componentes usuarios/login y usuarios/registro
    - Generar servicios que controlen las peticiones de los usuarios (en Angular)
    - Instalar cors en proyecto Angular (npm install cors) para que no de errores
    - Probar que llegan las peticiones

### FRONT
- Crear proyecto de Angular
- Definir models
    - Item: item.model.ts
    - User: user.model.ts
- Generar componentes
    - Home : descripción de la web y mapa de puntos limpios
    - Compra : lista de todos los productos 
    - DetalleProducto: detalle de un producto concreto
    - Venta : formulario para subir/editar los productos que va a vender cada usuario
    - Usuario/registro : formulario de nuevo usuario
    - Usuario/login : acceso con correo y password
    - Puntos-limpios : mapa de puntos limpios 
- Definir rutas y hacer las vistas (diseño) de cada una
    - /home - descripción y mapa
    - /compra - lista de todos los productos
        - filtros: 
            - categoría (devuelve los productos de una categoría concreta)
            - búsqueda (filtro según escribes en un input text)
            - fecha (ordenar por fecha de subida de producto)
            - precio (ordenar por precio mayor/menor, menor/mayor, rango)
            - distancia (ordenar por cercanía al usuario)
        - /compra/:productoId - devuelve el detalle de un producto
    - /vender - formulario para subir un producto
        - /vender/:idVendedor - perfil para que el usuario edite sus datos
    - /puntoslimpios - mapa de puntos limpios
    - /chat - investigar socket.io 
    - /registro - formulario de nuevo usuario
    - /login - acceso de un usuario ya registrado

- Generar servicios para enganchar con la API de express
    - ng generate service servicios/Usuarios (ejemplo)
    

### DISEÑO
    - Elegir paleta de colores:
        - https://coolors.co/d5d6d8-0e402d-81c14b-ffffff
    - Hacer un logo chachi
    - Escoger tipografía
    - Nav y footer común para todos los componentes
    - Dar a escoger la tipografía para personas con dislexia

### OTROS
    - Mapas: ver cómo capturar la latitud y longitud del usuario para registrar en la bd
    - Plantear el tema del chat al hacer match entre usuario-producto y/o sistema de notificaciones 


