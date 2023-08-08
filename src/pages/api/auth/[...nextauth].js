import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import sendCredentials from "@/services/sendCredentials";
import jwt_decode from "jwt-decode";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_GOOGLE,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRET_GITHUB,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const res = await sendCredentials({ email: email, password: password });

        if (res?.response?.status === 401) {
          throw new Error(res.response.data.error);
        } else {
          const token = res.accessToken;
          const decoded = jwt_decode(token);

          return { name: decoded.username, email: decoded.email, image: decoded.image };
        }
      },
    }),
  ],
  secret: "r8SLVsxMR290SHjGxQ/HpTiYDz2PyxkWaJpVMEHi2cA=",
});
