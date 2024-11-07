'use client'
import React from "react";
// import {Input, Card, CardBody} from "@nextui-org/react";
// import {EyeFilledIcon} from "../components/EyeFilledIcon";
// import {EyeSlashFilledIcon} from "../components/EyeSlashFilledIcon";


const Register = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center py-10">
      {/* <Card className="w-[60%] h-auto rounded px-10 py-5">
        <CardBody>
          <div className="flex justify-between">
            <div className="w-[100%] pr-5">
              <h3 className="text-xl font-semibold pb-4">Welcome to Alfaz.com</h3>
              <div className="input-item">
                <label htmlFor="full-name">Full Name</label>
                <Input type="text" className="border-2 border-gray-300 p-1 rounded-sm my-2" placeholder="Enter your full name" />
              </div>
              <div className="input-item">
                <label htmlFor="phone-email">Phone Number or Email</label>
                <Input type="text" className="border-2 border-gray-300 p-1 rounded-sm my-2" placeholder="Phone or Email" />
              </div>
              
              <div className="enter-password">
                <label htmlFor="phone-email">Password</label>
                <Input
                  variant="bordered"
                  placeholder="Enter your password"
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="border-2 border-gray-300 p-1 rounded-sm my-2"
                />
              </div>
              
            </div>

            <div className="w-[100%] pl-5">
              <h3 className="text-xl font-semibold pb-4 text-right text-red-400">Login</h3>
              <div className="input-item">
                <label htmlFor="full-name">Birthday</label>
                <Input type="text" className="border-2 border-gray-300 p-1 rounded-sm my-2" placeholder="Enter your full name" />
              </div>
              
            </div>

          </div>
        </CardBody>
      </Card> */}
    </div>
  )
}

export default Register