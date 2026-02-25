# Etapa 1: Build
FROM node:20-alpine as build-stage
WORKDIR /app

# Forzamos que no exista carpeta dist previa
RUN rm -rf dist

COPY package*.json ./
RUN npm install

# Copiamos el código fuente
COPY . .

# Ejecutamos el build de Vite
RUN npm run build

# Etapa 2: Producción
FROM nginx:stable-alpine as production-stage

# IMPORTANTE: Verificamos que copiamos desde la etapa de build
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]