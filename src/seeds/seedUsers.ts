import { db } from "@vercel/postgres";
import { users } from './databaseSeed';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
     CREATE TABLE IF NOT EXISTS users (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       email TEXT NOT NULL UNIQUE,
       password TEXT NOT NULL
     );
   `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      //const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
         INSERT INTO users (id, name, email, password)
         VALUES (${user.id}, ${user.email}, ${user.password})
         ON CONFLICT (id) DO NOTHING;
       `;
    }),
  );

  return insertedUsers;
}