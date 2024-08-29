"use client";

import { SparklesIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { useState, FormEvent } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiMicrosoftoutlook } from 'react-icons/si';

const SignUp: NextPage = () => { 
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (result.ok) {
        alert('Signup successful! Check your email for verification.');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="/logo.svg" alt="Demo App" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your first Demo App in seconds
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <FcGoogle className="mr-2 h-5 w-5" /> Sign up with Google
            </button>

            <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <SiMicrosoftoutlook className="mr-2 h-5 w-5 text-outlook" /> Sign up with Outlook
            </button>


            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Work email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-indigo-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <SparklesIcon aria-hidden="true" className="h-5 w-5 text-indigo-400" />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-indigo-700">You'll receive a link for a password-free log in.

                </p>

              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs mt-6 text-center text-gray-400">By signing up, I agree to the <a href="#" className="underline cursor-pointer">Privacy Policy</a> and <a href="#" className="underline cursor-pointer">Terms of Service.</a></p>
          </div>



          <div className="mt-6 text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-center text-sm text-gray-600">
        I've sent looms externally three times this month instead of scheduling a meeting and the first response is always, "This is great, why don't more people do this?"
      </div> */}
    </div>
  );
};

export default SignUp;