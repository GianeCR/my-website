# Instalación del Facturador

## Docker | Linux | SSL externo

FacturaloPeru 2020

### Pasos

1. Para instalar debe ejecutar el script evitando instalar el SSL, le será consultado en el proceso y deberá ingresar **"n"**.

2. Finalizada la instalación debe dirigirse a la ruta de instalación.

    ``` bash
    cd /root/facturadorpro31/
    ```

3. Debe editar el archivo **.env**
 
    ```bash
    nano .env
    ```

4. Dentro del editor ubicar los parámetros y cambiarlos.
    
    **Antes** 
    ```bash 
    APP\_URL=http://${APP\_URL\_BASE} FORCE\_HTTPS=false
    ```

    **Después**
    ```bash
    APP\_URL=https://${APP\_URL\_BASE} FORCE\_HTTPS=true
    ```

5. Una vez finalizado, guarde y salga del editor.

6. Ejecute los siguientes comandos para eliminar la caché de la aplicación.

    ```bash
    php artisan config:Cache
    ```

7. Con eso habrá completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podrá acceder a la herramienta.


:::danger[Importante]

Recuerde habilitar el puerto 443 para poder tener acceso a la herramienta.

:::
