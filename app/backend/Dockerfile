# ---- Base image ----
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies separately for caching
COPY package*.json ./
RUN npm install --only=production

# Copy source code
COPY . .

# ---- Runtime image ----
FROM node:18-alpine

WORKDIR /app

# Copy node_modules and compiled code from builder
COPY --from=builder /app /app

EXPOSE 3001

CMD ["node", "server.js"]
