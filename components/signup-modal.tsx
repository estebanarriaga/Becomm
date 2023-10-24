"use client";

import useSignUpModal from "@/hooks/use-signup-modal";
import Modal from "@/components/ui/modal";

const SignUpModal = () => {
  const signUpModal = useSignUpModal();

  return ( 
    <Modal 
      open={signUpModal.isOpen} 
      onClose={signUpModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
      </div>
    </Modal>
  );
}
 
export default SignUpModal;