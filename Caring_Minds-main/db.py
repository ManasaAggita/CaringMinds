import psycopg2

# PostgreSQL Database configuration
# At https://render.com/
DB_CONFIG = {
  'dbname': 'cm_postgres',
  'user': 'cm_postgres_user',
  'password': 'eEVY3P9d3Kcj9K9bZiAjnKOoE3TG4TBN',
  'host': 'dpg-ct3r30btq21c738uk6og-a.oregon-postgres.render.com',
  'port': '5432'
}

# Connect to PostgreSQL Database
def get_db_connection():
  conn = psycopg2.connect(**DB_CONFIG)
  return conn
