import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';  // Importar la función para generar UUIDs


// Define el esquema de validación
const FormSchema = z.object({
    id: z.string(),
    user: z.string().email({ message: 'EMAIL INVALIDO' }),
    password: z.string().min(6, { message: 'CARACTERES MINIMOS 6' }),
});

// Define el esquema de manejo de errores
export type State = {
    errors?: {
        user?: string[];
        password?: string[];
    };
    message?: string | null;
};

// Se omite id en la validacion
const CreateUser = FormSchema.omit({ id: true});

// La función para crear un usuario, utilizando el formulario de datos
export async function createUser (formData: FormData) {
    const validatedFields = CreateUser.safeParse({
        user: formData.get('user'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create Invoice.',
        };
      }
    
      const { user, password } = validatedFields.data;
      const id = uuidv4();  // Generar un nuevo UUID para el id del usuario
      try {
        await sql`
          INSERT INTO users (id, user, password)
          VALUES (${id}, ${user}, ${password})
        `;
      } catch (error) {
        return {
          message: 'Database Error: Failed to Create Invoice.',
        };
      }
  
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  
};
