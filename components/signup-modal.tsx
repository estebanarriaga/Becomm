"use client";

import { useStreamerSignUpModal, useUserSignUpModal} from "@/hooks/use-signup-modal";
import Modal from "@/components/ui/modal";
import { UserSignUpForm } from "./modals/user-signup-form";

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
        <UserSignUpForm type="USER" />
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
        <UserSignUpForm type="STREAMER"/>
      </div>
    </Modal>
  );
}
 
export { UserSignUpModal, StreamerSignUpModal };