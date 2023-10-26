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
			<div className='flex flex-col gap-4'>
				<div className="mb-4">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
						Log In with Github
					</h3>
				</div>
				<hr />
				<Button onClick={() => signIn('github')} className='flex flex-row gap-3 w-full'>
					<AiFillGithub /> Github Log In
				</Button>
			</div>
    </Modal>
	);
}
 
export default LoginModal;