# Secret Smoke - Landing Page

  

Este repositorio contiene el código fuente de la landing page de **Secret Smoke**, una marca desarrollada por **Siembra Spa**. El sitio web ha sido diseñado y desarrollado por **Bastián Moral**, utilizando tecnologías modernas como **React** y herramientas de despliegue automatizado.

  

## Tecnologías utilizadas

  

-  **React**: Framework de JavaScript utilizado para la creación de la interfaz de usuario.

-  **Vite**: Herramienta de desarrollo y bundling para aplicaciones web.

-  **Plesk**: Panel de control para la gestión de servidores y hosting.

-  **GitHub Actions**: Automatización para el despliegue en cada cambio.



## Estructura del proyecto

  

/dist # Archivos compilados para producción /src # Código fuente de la aplicación /public # Archivos públicos, favicon y otros recursos /vite.config.js # Configuración de Vite .gitignore # Lista de archivos y carpetas ignoradas por git

  

## Despliegue 

El despliegue de este proyecto se realiza en un hosting **Plesk** con **SSL** instalado para el dominio `secretsmoke.cl`. El despliegue es automatizado a través de **GitHub Actions**, que compila el código y lo publica en el servidor cada vez que se realizan cambios en el repositorio.

### Instrucciones de instalación

1. Clonar el repositorio:

```git clone https://github.com/usuario/secretsmoke.git cd secretsmoke```

2. Instalar las dependencias:

```npm install```

3. Ejecutar en modo desarrollo:
```npm run dev```

4. Para generar los archivos de producción:
```npm run build```

## Deploy
El proceso de deploy se realiza al compilar el código y subir la carpeta `/dist` al servidor **Plesk**. Si deseas automatizar este proceso, se puede configurar un script que suba automáticamente la carpeta generada a Plesk utilizando **rsync** o **FTP**.

### Automatización con GitHub Actions
Para configurar el deploy automático, puedes utilizar **GitHub Actions** creando un archivo `.github/workflows/deploy.yml` en tu repositorio con el siguiente contenido:

```yaml
name: Deploy to Plesk
on:
push:
branches:
- main
jobs:
build:
runs-on: ubuntu-latest
steps:
- name: Checkout code
uses: actions/checkout@v2
- name: Set up Node.js
uses: actions/setup-node@v2
with:
node-version: '16'
- name: Install dependencies
run: npm install
- name: Build project
run: npm run build
- name: Deploy to Plesk
run: |
rsync -avz --delete-after dist/ usuario@servidor.com:/ruta/a/httpdocs
env:
SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}```
```
Esto permitirá que cada vez que hagas un push a la rama main, tu aplicación se compile y se despliegue automáticamente en el servidor Plesk.

# Contribución 
Este proyecto es parte de los desarrollos internos para Siembra Spa y su marca Secret Smoke. Para sugerencias o mejoras, por favor contactar con Bastián Moral.
# Contacto
Si tienes alguna duda o comentario, puedes contactar al desarrollador:
* Bastián Moral
* *bastian@siembrachile.com