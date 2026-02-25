FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Usamos build-only como en tu original
RUN npm run build-only

FROM fabricio07/ubnginx:v1

# Limpiamos la ruta que usa tu imagen base personalizada
RUN rm -rf /var/www/html/*

# Copiamos la compilación a la ruta correcta para ubnginx
COPY --from=build-stage /app/dist /var/www/html

# Ajustamos permisos para que el servidor pueda leer los archivos
RUN chown -R www-data:www-data /var/www/html