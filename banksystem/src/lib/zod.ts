import { object, string } from "zod"
 
export const loginSchema = object({
  email: string({ required_error: "Se requiere un correo electrónico" })
    .min(1, "Se requiere un correo electrónico")
    .email("Correo electrónico inválido"),
  password: string({ required_error: "Se requiere una contraseña" })
    .min(1, "Se requiere una contraseña")
    .min(8, "Se requiere una contraseña de más de 8 caracteres")
    .max(32, "Se requiere una contraseña de menos de 32 caracteres"),
})

export const registerSchema = object({
  email: string({ required_error: "Se requiere un correo electrónico" })
    .min(1, "Se requiere un correo electrónico")
    .email("Correo electrónico inválido"),
  password: string({ required_error: "Se requiere una contraseña" })
    .min(1, "Se requiere una contraseña")
    .min(8, "Se requiere una contraseña de más de 8 caracteres")
    .max(32, "Se requiere una contraseña de menos de 32 caracteres"),
  name: string({ required_error: "Se requiere un nombre" })
    .min(1, "Se requiere un nombre")
    .max(32, "El nombre debe tener menos de 32 caracteres"),
})