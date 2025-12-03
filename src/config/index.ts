import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
  database_url: process.env.DATABASE_URL,
  jwt: {
    jwt_secret: process.env.JWT_SECRET || 'fallback-secret',
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret',
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
  stripe: {
    secret_key: process.env.STRIPE_SECRET_KEY,
    publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
    webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
  },
  frontend_url: process.env.FRONTEND_URL,
};