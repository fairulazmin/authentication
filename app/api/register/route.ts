import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { registerFormSchema } from "@/lib/register-form-schema";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const validation = registerFormSchema.safeParse(body);

  if (!validation.success) {
    console.log("Validation not success");
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  console.log("user: ", user);

  if (user)
    return NextResponse.json({ error: "User already exist" }, { status: 400 });

  const hashedPassword = await bcrypt.hash(body.password, 12);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      username: body.username,
      hashedPassword,
    },
  });

  console.log("newUser: ", newUser);

  return NextResponse.json(newUser, { status: 201 });
};
