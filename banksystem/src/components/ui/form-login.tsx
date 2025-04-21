"use client"

import { z } from 'zod'
import { loginSchema } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormLogin = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values)
  }

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Título y subtítulo */}
      <h1 className="text-3xl font-bold text-center mb-2">Bienvenido al Sistema Bancario</h1>
      <p className="text-center text-gray-600 mb-6">Antes de comenzar, debe ingresar su cuenta</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Correo Electrónico</FormLabel>
                <FormControl>
                  <Input
                    className="text-lg py-5 px-6 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese su correo electrónico..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="text-lg py-5 px-6 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese su contraseña..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full py-4 text-lg">
            Iniciar Sesión
          </Button>

          {/* Enlace de Recuperar Contraseña */}
          <div className="flex justify-center mt-4">
            <a href="#" className="text-blue-600 underline text-lg">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Enlace de Registro */}
          <div className="flex justify-center mt-2 text-lg text-gray-700">
            <span>¿No tiene cuenta aún? </span>
            <a href="#" className="text-blue-600 underline ml-1">Registrarse</a>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default FormLogin
