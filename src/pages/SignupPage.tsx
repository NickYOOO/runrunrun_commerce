//src/pages/SignupPage.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

type FormData = {
  email: string;
  password: string;
};

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      // 회원가입 성공 처리
      console.log('회원가입 성공');
    } catch (error) {
      // 에러 처리
      console.error('회원가입 에러', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="mb-4 text-xl font-bold">회원가입</h2>

        <label htmlFor="email" className="block mb-2">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: '유효한 이메일 주소를 입력해주세요.',
            },
          })}
          className="border p-2 w-full mb-4"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}

        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 6,
              message: '비밀번호는 최소 6자 이상이어야 합니다.',
            },
          })}
          className="border p-2 w-full mb-4"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
