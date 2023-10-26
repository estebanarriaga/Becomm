'use client';

import { signIn } from 'next-auth/react';

import { Button } from '../ui/button';

import useLoginModal from '@/hooks/use-login-modal';
import Modal from '../ui/modal';
import { AiFillGithub }from "react-icons/ai"

const LoginModal = () => {
	const loginModal = useLoginModal();

	return (
		<Modal 
      open={loginModal.isOpen} 
      onClose={loginModal.onClose}
    >
			<div className='flex flex-col gap-4 items-center'>
				<Button onClick={() => signIn('github')} className='flex flex-row gap-3'>
					<AiFillGithub /> continue with Github
				</Button>
			</div>
    </Modal>
	);
}
 
export default LoginModal;