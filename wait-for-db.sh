#!/bin/sh

echo "⏳ Waiting for database to be ready..."

# Try to connect using mysql CLI
until mysql -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" -e "USE $DB_NAME;" >/dev/null 2>&1; do
  echo "❌ Still can't connect to MySQL @ $DB_HOST, retrying..."
  sleep 5
done

echo "✅ Database is up! Starting the API..."
exec "$@"
