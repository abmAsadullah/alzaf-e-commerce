"use client"
import React from 'react'
import Image from 'next/image';

import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox"


export default function Registration() {
  return (
    <div className="w-full my-10">
      <form>
        <Card className='rounded-sm w-[60%] mx-auto px-10 py-5'>
          <CardHeader className="space-y-1">
            <div className="flex justify-between">
              <CardTitle className="text-2xl">Welcome to Alzaf.com</CardTitle>
              <CardTitle className="text-2xl text-orange-500">Login</CardTitle>
            </div>
          </CardHeader>
          <div className='grid lg:grid-cols-2'>
            <div className='left-form'>
              <CardContent className="space-y-1">
                <div className="space-y-1">
                  <Label className='mt-0 pt-0' htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-1">
                  <Label className='mt-0 pt-0' htmlFor="email">Phone Number or Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Phone or Email"
                  />
                </div>

                <div className="space-y-1">
                  <Label className='mt-0 pt-0' htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Please enter your password"
                  />
                </div>
                <div className="space-y-1">
                  <Label className='mt-0 pt-0' htmlFor="password">Confirm Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
              </CardContent>
            </div>
            <div className="right-form">
              <CardContent className="space-y-1 pb-1">
                <div className="space-y-1">
                  <div className="flex  justify-between">
                    <div className="birthday">
                      <Label className='mt-0 pt-0' htmlFor="birthday">Birthday</Label>
                      <div className="flex justify-between">
                        <div className="mr-1">
                          <Select>
                            <SelectTrigger className="max-w-[180px]  text-gray-500 text-xs text-gray-500 text-xs">
                              <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="jan">January</SelectItem>
                              <SelectItem value="feb">February</SelectItem>
                              <SelectItem value="mar">March</SelectItem>
                              <SelectItem value="apr">April</SelectItem>
                              <SelectItem value="may">May</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="mr-1">
                          <Select>
                            <SelectTrigger className="max-w-[180px]  text-gray-500 text-xs">
                              <SelectValue placeholder="Day" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">01</SelectItem>
                              <SelectItem value="2">02</SelectItem>
                              <SelectItem value="3">03</SelectItem>
                              <SelectItem value="4">04</SelectItem>
                              <SelectItem value="5">05</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="mr-1">
                          <Select>
                            <SelectTrigger className="max-w-[180px]  text-gray-500 text-xs">
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">2024</SelectItem>
                              <SelectItem value="2">2023</SelectItem>
                              <SelectItem value="3">2022</SelectItem>
                              <SelectItem value="4">2021</SelectItem>
                              <SelectItem value="5">2020</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="gender">
                      <Label className='mt-0 pt-0' htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger className="max-w-[180px]  text-gray-500 text-xs">
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Male</SelectItem>
                          <SelectItem value="2">Female</SelectItem>
                          <SelectItem value="3">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col">
                <div className="flex space-x-1">
                  <Checkbox id="terms" className='text-xs' />
                  <label
                    htmlFor="terms"
                    className="text-xs"
                  >
                    {`I'd like to receive exclusive offers and promotions via SMS.`}
                  </label>
                </div>
                <button className="w-full bg-orange-500 text-white py-2 mt-3 rounded-sm">Sign Up</button>
                <button className="w-full border-2 border-orange-300 py-1 mt-3 rounded-sm flex justify-center items-center gap-2">
                  <Image
                    src="/fb-icon.png"
                    width={30}
                    height={0}
                    alt="Picture of the author"
                  />
                  <span>Sign Up with Facebook</span>
                </button>
                <button className="w-full border-2 border-orange-300 py-1 mt-3 rounded-sm flex justify-center items-center gap-2">
                  <Image
                    src="/google-icon.png"
                    width={30}
                    height={0}
                    alt="Picture of the author"
                  />
                  <span>Sign Up with Google</span>
                </button>
              </CardFooter>
            </div>

          </div>

        </Card>
        {/* <div className="mt-4 text-center text-sm">
          Have an account?
          <Link className="underline ml-2" href="signin">
            Sing In
          </Link>
        </div> */}
      </form>
    </div>
  );
}