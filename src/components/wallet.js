'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import Jago from '../assets/images/logo_jago.png'
import Clip from '../assets/images/clip.svg'
import Muamalat from '../assets/images/logo_muamalat.png'
import { useState } from 'react'

export default function Wallet({ open, setOpen }) {

    const [sucess, setSuccess] = useState(false)

    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setSuccess(true)

            setTimeout(() => {
                setSuccess(false)
            }, 1000)

        } catch (err) {
        }
    };

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-[9999999]">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed top-1/4 z-[99999] w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl border-[2px] border-primary transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full max-w-md sm:w-screen ">
                            <div className="mt-3 text-center">
                                <div className="mt-2 flex flex-col items-center w-full">
                                    <div className="w-full flex justify-center">
                                        <img src={Jago} alt="jago" className="w-[100px] h-auto" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <p className='font-second mt-2 text-xs'>Bank Jago 5076 4855 9283 <br /> A.n Zuhdan Nur Ihsan Iskandar   </p>
                                        <img onClick={() => copyText('507648559283')} src={Clip} alt='clip' className='w-[16px]' />
                                    </div>

                                    <div className="w-full flex justify-center mt-10">
                                        <img src={Muamalat} alt="jago" className="w-[100px] h-auto" />
                                    </div>
                                    <div className='flex gap-2 mt-2'>
                                        <p className='font-second mt-2 text-xs'>Bank Muamalat 1120 0056 37 <br /> A.n Ananda Karina Muslimah  </p>
                                        <img onClick={() => copyText('1120005637')} src={Clip} alt='clip' className='w-[16px]' />
                                    </div>

                                    {sucess && <p className='mt-5 font-second text-xs'>
                                        successfully copied
                                    </p>}

                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm text-white font-second font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto "
                            >
                                Tutup
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
