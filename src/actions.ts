import { redirect } from 'next/navigation';
import { z } from 'zod';

// Define el esquema de validación
const Formschema = z.object({
    user: z.string().email({ message: 'EMAIL INVALIDO' }),
    password: z.string().min(6, { message: 'CARACTERES MINIMOS 6' }),
});

// La función para crear un usuario, utilizando el formulario de datos
export const createUser = (formData: FormData) => {
    // Convertir FormData a un objeto plano
    const data = {
        user: formData.get('user') as string | null,
        password: formData.get('password') as string | null,
    };

    // Validar los datos del formulario
    const result = Formschema.safeParse(data);

    if (result.success) {
        // Los datos son válidos
        //return result.data;
        redirect('/');

    } else {
        // Obtener y mostrar los mensajes de error
        const errors = result.error.format();
        console.error('Errores de validación:', errors);

        // Puedes devolver los mensajes de error si es necesario
        return errors;
    }
    
};
