"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Here you would implement your API call to request a password reset
      // For example: await fetch('/api/auth/forgot-password', { method: 'POST', body: JSON.stringify(data) })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      toast.success("Şifre sıfırlama bağlantısı gönderildi!");
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Şifremi Unuttum
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Şifrenizi sıfırlamak için e-posta adresinizi girin
          </p>
        </div>

        {!isSubmitted ? (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-posta Adresi
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="E-posta Adresi"
                  {...register("email", {
                    required: "E-posta adresi gerekli",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Geçerli bir e-posta adresi girin",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-3 p text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:bg-pink-300"
              >
                {isLoading
                  ? "İşleniyor..."
                  : "Şifre Sıfırlama Bağlantısı Gönder"}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-4">
            <p className="text-green-600 mb-4">
              Şifre sıfırlama talimatları e-posta adresinize gönderildi. Lütfen
              gelen kutunuzu kontrol edin.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className=" text-pink-600 hover:text-pink-500"
            >
              Farklı bir e-posta dene
            </button>
          </div>
        )}

        <div className="text-center mt-4">
          <Link
            href="/auth/login"
            className="font-medium  text-pink-600 hover:text-pink-500"
          >
            Giriş sayfasına dön
          </Link>
        </div>
      </div>
    </div>
  );
}
