'use client'

import { FormEvent } from 'react'

import { toast } from 'sonner'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Checkbox, Form, Link, TextField } from 'ui'

export function LoginForm() {
  const submit = (e: FormEvent) => {
    e.preventDefault()

    toast.success('Login Successful')
  }
  return (
    <Card className="sm:border-border border-transparent sm:rounded-xl rounded-none border-y-border">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form onSubmit={submit} className="space-y-6">
          <TextField label="Email" name="email" type="email" isRequired />
          <TextField label="Password" name="password" type="password" isRequired />
          <div className="flex items-center justify-between">
            <Checkbox>Remember me</Checkbox>
            <Link intent="primary" href="#">
              Forgot password?
            </Link>
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </CardContent>
    </Card>
  )
}
