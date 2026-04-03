FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN SECRET_KEY=dummy-secret-key-for-collectstatic \
    DB_URL=postgres://dummy:dummy@dummy:5432/dummy_db \
    EMAIL_HOST_USER=dummy@gmail.com \
    EMAIL_HOST_PASSWORD=dummy \
    FRONTEND_URL=http://localhost:5173 \
    DEBUG=False \
    python manage.py collectstatic --noinput --clear

EXPOSE 8000

CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]