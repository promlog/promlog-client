# ===============================
# 1️⃣ Build stage (Vite + React)
# ===============================
FROM node:22-alpine AS build
WORKDIR /app

# 의존성 파일 먼저
COPY package.json package-lock.json* ./

# install (lock 있으면 ci, 없으면 install)
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# 소스 복사 후 빌드
COPY . .
RUN npm run build


# ===============================
# 2️⃣ Runtime stage (Nginx)
# ===============================
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
