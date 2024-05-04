# 開發用 Dockerfile
ARG VARIANT=18-slim
FROM node:${VARIANT}

RUN apt-get update && apt-get install -y --no-install-recommends \
    # 時區設定
    tzdata \
    # 版控
    git \
    ca-certificates \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# 安裝 pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm nodemon && pnpm config set store-dir ~/.pnpm-store