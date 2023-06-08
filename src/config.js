import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const DATABASE_URL =
    process.env.DATABASE_URL ||
    'mysql://kjg8uzbr1do0d3j9w3ve:pscale_pw_nS7oL8eSPPyRqB6BE05ELnGxte5YlzD7yHWbZ8qV8fn@aws.connect.psdb.cloud/max-api-db?ssl={"rejectUnauthorized":true}';
