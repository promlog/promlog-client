# ===============================
# 1️⃣ Build stage (Vite + React)
# ===============================
FROM node:22-alpine AS build
WORKDIR /app

# 의존성 파일 먼저
COPY package.json package-lock.json* ./

# install (lock 있으면 ci, 없으면 install)
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# 소스 복사
COPY . .

# 외부에서 --build-arg로 받은 값을 내부 환경변수로 설정
ARG VITE_API_BASE_URL
ARG VITE_KAKAO_API_KEY

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_KAKAO_API_KEY=$VITE_KAKAO_API_KEY

# 빌드 실행
RUN npm run build

# ===============================
# 2️⃣ Runtime stage (Nginx)
# ===============================
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
