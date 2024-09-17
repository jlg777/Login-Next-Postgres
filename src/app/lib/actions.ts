'use server';
import { sql } from '@vercel/postgres';
//import { revalidatePath } from 'next/cache';
//import { redirect } from 'next/navigation';
import { z } from 'zod';
import bcrypt from 'bcrypt';



// Define el esquema de validación
const FormSchema = z.object({
  id: z.string(),
  email: z.string().email({ message: 'EMAIL INVALIDO' }),
  password: z.string().min(6, { message: 'CARACTERES MINIMOS 6' }),
});

// Define el esquema de manejo de errores
export type State = {
  errors?: {
    email?: string[] ;
    password?: string[] ;
  };
  message?: string | null;
};

// Se omite id en la validacion
const CreateUser = FormSchema.omit({ id: true });

// La función para crear un usuario, utilizando el formulario de datos
export async function createUser(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = CreateUser.safeParse({
    email: formData.get('email')  as string | null,
    password: formData.get('password')  as string | null,
  });

console.log(validatedFields)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }
  //console.log(validatedFields.data)
  const { email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPassword})
    `;
    // Redirigir después de la operación exitosa
     
     return {
       message: 'User created successfully',
    };

  } catch (error) {
    console.error('Database Error:', error); // Agregar detalles del error
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }



  //revalidatePath('/dashboard/invoices');

  //revalidatePath('/');
  //redirect('/');
};
