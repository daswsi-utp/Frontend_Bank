"use client"
import React from 'react'
import { z } from 'zod'
import { loginSchema } from '@/lib/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

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
import styles from './form-login.module.css'

const FormLogin = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // Cuentas predefinidas (solo en código, no visibles en UI)
  const predefinedAccounts = {
    admin: {
      email: "admin@banco.com",
      password: "Admin1234",
      redirectUrl: "http://192.168.1.152:3000/admin"
    },
    user: {
      email: "usuario@banco.com",
      password: "Usuario123",
      redirectUrl: "http://192.168.1.152:3000/users"
    }
  }

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Validación cuenta de admin
    if (values.email === predefinedAccounts.admin.email && 
        values.password === predefinedAccounts.admin.password) {
      router.push(predefinedAccounts.admin.redirectUrl)
      return
    }

    // Validación cuenta de usuario
    if (values.email === predefinedAccounts.user.email && 
        values.password === predefinedAccounts.user.password) {
      router.push(predefinedAccounts.user.redirectUrl)
      return
    }

    // Si no es ninguna cuenta válida
    form.setError('email', {
      type: 'manual',
      message: 'Credenciales incorrectas',
    })
    form.setError('password', {
      type: 'manual',
      message: 'Credenciales incorrectas',
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido al Sistema Bancario</h1>
      <p className="text-center text-gray-600 mb-6">Ingrese sus credenciales para continuar</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">Correo Electrónico</FormLabel>
                <FormControl>
                  <Input
                    className={`${styles.input} text-lg py-5 px-6 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Ingrese su correo electrónico..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className={styles.error}>{form.formState.errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold">Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className={`${styles.input} text-lg py-5 px-6 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Ingrese su contraseña..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className={styles.error}>{form.formState.errors.password?.message}</FormMessage>
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