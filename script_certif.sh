#!/bin/bash

if [ $# -lt 2 ]; then
  echo "❌ Utilisation : $0 domaine.com [email@domaine.com]"
  exit 1
fi

DOMAIN="$1"
EMAIL="$2"

# --- Installation Certbot ---
sudo apt update
sudo apt install -y certbot python3-certbot-nginx

# --- get SSL certificate ---
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m "$EMAIL"

# --- Test renewal ---
sudo certbot renew --dry-run
