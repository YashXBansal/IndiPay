import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        number: { label: "number", type: "text", placeholder: "1231231231" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text", placeholder: "John Doe" },
        email: { label: "Email", type: "text", placeholder: "john.doe@example.com" }
      },
      async authorize(credentials: any) {
        // Check if user exists
        const existingUser = await db.user.findUnique({
          where: {
            number: credentials.number
          }
        });

        if (existingUser) {
          // Validate password
          const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
          if (passwordValidation) {
            console.log("Login successful for user:", existingUser.number);
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.email,
              number: existingUser.number
            };
          } else {
            return null;
          }
        } else {
          // Create a new user
          try {
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const user = await db.user.create({
              data: {
                number: credentials.number,
                password: hashedPassword,
                name: credentials.name || null,
                email: credentials.email || null
              }
            });
            
            console.log("New user created:", user.number);
            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              number: user.number
            };
          } catch (e) {
            console.error("Error creating user:", e);
            return null;
          }
        }
      }
    })
  ],
  pages: {
    signIn: "/signin"
  },
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      session.user = {
        id: token.sub,
        name: token.name,
        email: token.email,
        number: token.number
      };
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.email = user.email;
        token.number = user.number;
      }
      return token;
    }
  }
};
