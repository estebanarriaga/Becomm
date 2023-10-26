"use client";

import { useEffect, useState } from "react";

import { StreamerSignUpModal, UserSignUpModal} from "@/components/signup-modal";
import LoginModal from "@/components/modals/login-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return ( 
    <>
      <StreamerSignUpModal />
      <UserSignUpModal />
      <LoginModal />
    </>
   );
}
 
export default ModalProvider;
