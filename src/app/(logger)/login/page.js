"use client";
import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { Logger } from "@/app/api/action";

export default function LoginPage() {
  const initialState = {
    error: {},
  };
  const [state, formAction, isPending] = useActionState(Logger, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        action={formAction}
        className="bg-white p-8 rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
        />
        {state?.error.email && (
          <p className="text-red-500 text-sm mt-1">{state.error.email}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          name="password"
        />
        {state?.error.password && (
          <p className="text-red-500 text-sm mt-1">{state.error.password}</p>
        )}
        <button
          type="submit"
          className="bg-red-800 text-white p-2 rounded w-full cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
