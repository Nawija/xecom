"use server"

import { z } from "zod"

z

export async function addProducts(formData: FormData) {
    console.log(formData)
}
