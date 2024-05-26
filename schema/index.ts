import * as z from "zod"

export const SigninSchema = z.object({
    email: z.string().email({
        message: "Email isi dong bro.."
    }),
    password: z.string().min(1, {
        message: "Password tidak boleh kosong bro.."
    })
})

export const SignupSchema = z.object({
    name: z.string().min(1, {
        message: "Name wajib diisi bro.."
    }),
    email: z.string().email({
        message: "Email isi dong bro.."
    }),
    password: z.string().min(6, {
        message: "Password minimal 6 karakter bro.."
    })
})