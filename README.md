// ✅ Folder structure assumed:
// /pages/api/auth/[...nextauth].js
// /pages/api/register.js
// /pages/auth/signin.js
// /pages/auth/signup.js
// /models/User.js
// /lib/db.js

// ✅ 1. /lib/db.js - MongoDB connection
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) throw new Error("Please define MONGO_URI in .env.local");

let isConnected = false;

export default async function connectDB() {
if (isConnected) return;

try {
await mongoose.connect(MONGO_URI);
isConnected = true;
console.log("MongoDB Connected");
} catch (error) {
console.error("DB Connection Failed", error);
}
}

// ✅ 2. /models/User.js - Mongoose User model
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model("User", userSchema);

// ✅ 3. /pages/api/auth/[...nextauth].js - NextAuth config
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { compare } from "bcryptjs";

export default NextAuth({
providers: [
CredentialsProvider({
name: "Credentials",
credentials: {
email: { label: "Email", type: "text" },
password: { label: "Password", type: "password" },
},
async authorize(credentials) {
await connectDB();
const user = await User.findOne({ email: credentials.email });
if (!user) throw new Error("No user found");

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) throw new Error("Invalid password");

        return { id: user._id, email: user.email };
      },
    }),

],
pages: {
signIn: "/auth/signin",
},
session: {
strategy: "jwt",
},
secret: process.env.NEXTAUTH_SECRET,
});

// ✅ 4. /pages/api/register.js - Registration API
import { hash } from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/models/User";

export default async function handler(req, res) {
if (req.method !== "POST") return res.status(405).end();

const { email, password } = req.body;

await connectDB();
const existingUser = await User.findOne({ email });
if (existingUser) return res.status(400).json({ message: "User exists" });

const hashedPassword = await hash(password, 10);
const newUser = new User({ email, password: hashedPassword });
await newUser.save();

res.status(201).json({ message: "User created" });
}

// ✅ 5. /pages/auth/signup.js - Signup Page
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUp() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const router = useRouter();

const handleSubmit = async (e) => {
e.preventDefault();
const res = await fetch("/api/register", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ email, password }),
});
if (res.ok) router.push("/auth/signin");
else alert("Sign up failed");
};

return (

<form onSubmit={handleSubmit}>
<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
<button type="submit">Sign Up</button>
</form>
);
}

// ✅ 6. /pages/auth/signin.js - Login Page
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const router = useRouter();

const handleSubmit = async (e) => {
e.preventDefault();
const res = await signIn("credentials", {
redirect: false,
email,
password,
});
if (res.ok) router.push("/");
else alert("Login failed");
};

return (

<form onSubmit={handleSubmit}>
<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
<button type="submit">Login</button>
</form>
);
}
