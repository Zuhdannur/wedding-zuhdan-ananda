'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

import Img01 from '../assets/images/gallery/01.jpg'
import Img02 from '../assets/images/gallery/02.jpg'
import Img03 from '../assets/images/gallery/03.jpg'
import Img04 from '../assets/images/gallery/04.jpg'
import Img05 from '../assets/images/gallery/05.jpg'
import Img06 from '../assets/images/gallery/06.jpg'
import Img07 from '../assets/images/gallery/07.jpg'
import Img08 from '../assets/images/gallery/08.jpg'

export default function Example({ open, setOpen }) {

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-[9999999] w-full max-w-md">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed h-screen top-0 z-[99999] w-screen overflow-y-scroll">
                <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                    <DialogPanel
                        transition
                        className="relative transform overflow-x-hidden rounded-lg bg-white dark:bg-white text-left shadow-xl border-[2px] border-primary transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end">
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 w-[50px] inline-flex justify-center px-3 py-2 text-sm text-black font-second font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto "
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                        <div className="bg-white dark:bg-white px-4 pb-4 w-full max-w-md ">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:text-center">
                                    <div className="mt-2 ">
                                        <div class="grid grid-cols-2 gap-4 w-5/6 items-center mx-7">
                                            <div class="grid gap-4">
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img01} alt="" />
                                                </div>
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img02} alt="" />
                                                </div>
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img03} alt="" />
                                                </div>
                                            </div>
                                            <div class="grid gap-4">
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img07} alt="" />
                                                </div>
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img04} alt="" />
                                                </div>
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img05} alt="" />
                                                </div>
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img06} alt="" />
                                                </div>
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img08} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
