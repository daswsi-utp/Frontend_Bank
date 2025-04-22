"use client"
import React from 'react'
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

// Importando el módulo CSS
import styles from './form-login.module.css'

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
    <div className={styles.container}>
      {/* Título y subtítulo */}
      <h1 className={styles.title}>Bienvenido al Sistema Bancario</h1>
      <p className="text-center text-gray-600 mb-6">Antes de comenzar, debe ingresar su cuenta</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">Correo Electrónico</FormLabel> {/* Título en negrita */}
                <FormControl>
                  <Input
                    className={`${styles.input} text-lg py-5 px-6 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Ingrese su correo electrónico..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className={styles.error}>{form.formState.errors.email?.message}</FormMessage> {/* Error de email */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">Contraseña</FormLabel> {/* Título en negrita */}
                <FormControl>
                  <Input
                    type="password"
                    className={`${styles.input} text-lg py-5 px-6 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Ingrese su contraseña..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className={styles.error}>{form.formState.errors.password?.message}</FormMessage> {/* Error de password */}
              </FormItem>
            )}
          />

          <Button className={styles.button} type="submit">
            Iniciar Sesión
          </Button>

          <div className={styles.links}>
            <a href="#" className={styles.link}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className={styles.links}>
            <span>¿No tiene cuenta aún? </span>
            <a href="#" className={styles.link}>Registrarse</a>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default FormLogin
