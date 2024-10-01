'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

import Img01 from '../assets/images/gallery/01.jpg'
import Img02 from '../assets/images/gallery/02.jpg'
import Img03 from '../assets/images/gallery/03.jpg'
import Img04 from '../assets/images/gallery/04.jpg'
import Img05 from '../assets/images/gallery/05.jpg'
import Img06 from '../assets/images/gallery/06.jpg'

export default function Example({ open, setOpen }) {

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-[9999999]">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed top-0 z-[99999] w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-x-hidden rounded-lg bg-white text-left shadow-xl border-[2px] border-primary transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-screen">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:text-center">
                                    <div className="mt-2 ">
                                        <div class="grid grid-cols-2 gap-4 w-5/6 items-center mx-4">
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
                                                    <img class="h-auto max-w-full rounded-lg" src={Img04} alt="" />
                                                </div>
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img05} alt="" />
                                                </div>
                                                <div>
                                                    <img class="h-auto max-w-full rounded-lg" src={Img06} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
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
