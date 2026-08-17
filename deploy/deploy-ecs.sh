#!/bin/bash
# ECS deploy script called by Yunxiao pipeline "host deploy" task.
# Usage:
#   WEB_ONLY=1 ./deploy-ecs.sh <tag>
#   ./deploy-ecs.sh <tag>

set -e

DEPLOY_DIR="/data/zjw"
cd "$DEPLOY_DIR"

if [ ! -f .env ]; then
  [ -f .env.example ] && cp .env.example .env || { echo "[ERROR] .env does not exist"; exit 1; }
fi

update_env() {
  local key="$1"
  local value="$2"
  if grep -q "^${key}=" .env; then
    sed -i "s|^${key}=.*|${key}=${value}|" .env
  else
    echo "${key}=${value}" >> .env
  fi
  echo "[INFO] .env updated: ${key}"
}

NEW_TAG="$1"
if [ -n "$NEW_TAG" ]; then
  update_env WEB_TAG "$NEW_TAG"
fi

COMPOSE="docker compose"
if ! docker compose version >/dev/null 2>&1; then
  COMPOSE="docker-compose"
fi

$COMPOSE pull web
$COMPOSE up -d web
$COMPOSE ps web
