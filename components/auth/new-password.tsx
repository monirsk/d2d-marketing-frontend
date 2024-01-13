'use client';

import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@/assets/icons';
import { useState, FormEvent } from 'react';
import ForgetPasswordCommon from './common/forget-password-common';
import Copyright from './common/copyright';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setReTypePassword] = useState('');

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(newPassword);
    setNewPassword('');
    console.log(retypePassword);
    setReTypePassword('');
  };

  return (
    <section>
      <div className='max-w-[600px] mx-auto px-6 py-12'>
        <div>
          <div className='mt-10 my-6 text-[16px] flex flex-row text-gray-500 tracking-[0] leading-[16px] whitespace-nowrap'>
            <Link href={PAGE_ROUTES.Signin} className='mr-2'>
              <ArrowLeftCircleIcon />
            </Link>
            Back to Login
          </div>
          <div className='mt-10 text-[36px] font-bold leading-[36px] tracking-[0.36px] text-[#0B1420] whitespace-nowrap'>
            New password 👋
          </div>
          <div className='my-5 font-extralight text-[#313957] text-[16px] tracking-[0.16px] leading-[25.6px] whitespace-nowrap'>Type your new password</div>
        </div>

        <form onSubmit={onFormSubmit}>
          <div>
            <label className='font-medium text-[#0B1420] text-[16px] tracking-[0.16px] leading-[16px] whitespace-nowrap'>New password</label>
            <div className='mt-4 mb-4'>
              <input
                id='newPassword'
                type='password'
                name='newPassword'
                value={newPassword}
                className='block w-full rounded-[10px] border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                placeholder='New password'
                autoComplete='off'
                required
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
            <label className='font-medium text-[#0B1420] text-[16px] tracking-[0.16px] leading-[16px] whitespace-nowrap'>Re-type password</label>
            <div className='mt-4 mb-4'>
              <input
                id='retypePassword'
                type='password'
                name='retypePassword'
                value={retypePassword}
                className='block w-full rounded-[10px] border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pl-2'
                placeholder='Re-type password'
                autoComplete='off'
                required
                onChange={(event) => setReTypePassword(event.target.value)}
              />
            </div>
          </div>
          <ForgetPasswordCommon
            buttonInfo={{
              className: 'w-full bg-[#4318FF] text-[16px] tracking-[0] leading-[16px] rounded-[12px] text-white p-4 font-normal my-4',
              text: 'Submit',
              type: 'submit',
            }}
          />
        </form>

        <Copyright />
      </div>
    </section>
  );
};

export default NewPassword;
