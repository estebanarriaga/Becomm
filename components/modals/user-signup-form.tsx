"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import React from "react"
import { useRouter } from "next/navigation"
import { useStreamerSignUpModal, useUserSignUpModal } from "@/hooks/use-signup-modal"

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2).email(),
  password: z.string().min(2),
	verifyPassword: z.string().min(2),
})


export function UserSignUpForm ({
	type = "USER",
}) {
	let signUpModal: any;
  // if (type === "USER") {
  //   signUpModal = useUserSignUpModal();
  // } else signUpModal = useStreamerSignUpModal()
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
			email: "",
			password: "",
			verifyPassword: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log("Data: ", data)

		if (data.password !== data.verifyPassword) {
			toast({
				variant: "destructive",
				title: "Password must match"
			})
			return ;
		}
		try {
			await axios.post('/api/register', {
				email: data.email,
				name: data.name,
				password: data.password,
				type: type
			})
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Something went wrong"
			})
		} finally {
			signUpModal.onClose();
      router.refresh();
		}
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="user" type="text" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormDescription>
                This email you will be contacted to.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="verifyPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verify passowrd</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
				{/* <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
								<Select
									placeholder="Anywhere"
									isClearable
									options={getAll()}
									value={value}
									onChange={(value) => field.value = value.label}
									formatOptionLabel={(option: any) => (
										<div className="
										flex flex-row items-center gap-3">
											<div>{option.flag}</div>
											<div>
												{option.label},
												<span className="text-neutral-500 ml-1">
													{option.region}
												</span>
											</div>
										</div>
									)}
									classNames={{
										control: () => 'p-3 border-2',
										input: () => 'text-lg',
										option: () => 'text-lg'
									}}
									theme={(theme) => ({
										...theme,
										borderRadius: 6,
										colors: {
											...theme.colors,
											primary: 'black',
											primary25: '#ffe4e6'
										}
									})}
								/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
				<div>
			</div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
