CONF_FILE="nginx.conf"

sudo cp "$CONF_FILE" /etc/nginx/sites-available/

sudo ln -s /etc/nginx/sites-available/"$CONF_FILE" /etc/nginx/sites-enabled/ 2>/dev/null

# Check if the symbolic link was created successfully
sudo nginx -t
if [ $? -ne 0 ]; then
  echo "❌ Error in Nginx configuration"
  exit 1
fi

# --- Reload Nginx ---
sudo systemctl reload nginx