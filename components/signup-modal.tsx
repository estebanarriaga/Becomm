"use client";

import { useStreamerSignUpModal, useUserSignUpModal} from "@/hooks/use-signup-modal";
import Modal from "@/components/ui/modal";
import { UserSignUpForm } from "./modals/user-signup-form";
import { Button } from "./ui/button";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const UserSignUpModal = () => {
  const signUpModal = useUserSignUpModal();

  return ( 
    <Modal 
      open={signUpModal.isOpen} 
      onClose={signUpModal.onClose}
    >
      <div className="mb-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Sign Up
        </h3>
        <p className="leading-7">
          Complete this form
        </p>
      </div>
      <hr />
      <div className="w-full mt-7">
        <div className='flex flex-col gap-4 items-center'>
          <UserSignUpForm />
        </div>
      </div>
    </Modal>
  );
}
 

const StreamerSignUpModal = () => {
  const signUpModal = useStreamerSignUpModal();
  
  return (
    <Modal 
      open={signUpModal.isOpen} 
      onClose={signUpModal.onClose}
      >
      <div className="mb-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Sign Up as Streamer
        </h3>
        <p className="leading-7">
          Complete this form
        </p>
      </div>
      <hr />
      <div className="w-full mt-7">
        <div className='flex flex-col gap-4 items-center'>
          <UserSignUpForm />
        </div>
      </div>
    </Modal>
  );
}
 
export { UserSignUpModal, StreamerSignUpModal };