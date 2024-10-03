import BorderRight from '../assets/images/border-right.svg'
import BorderLeft from '../assets/images/border-left.svg'
import BottomFlowers from '../assets/images/bottom-flowers.svg'
import BottomRights from '../assets/images/bottom-right-flowers.svg'
import BottomLeft from '../assets/images/bottom-left-flowers.svg'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useState } from 'react'


function ShowModal({ open, setOpen }) {
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
                        className="relative transform overflow-hidden rounded-lg bg-white dark:bg-white text-left shadow-xl border-[2px] border-primary transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-screen ">
                            <div className="mt-3 text-center">
                                <div className="mt-2 flex items-start flex-col w-min-md w-max-md">
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 font-second">Your message</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-11/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex gap-4">
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm text-white font-second font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto "
                            >
                                Tutup
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-white px-3 py-2 text-sm text-primary border-[1px]  border-primary font-second font-semibold text-gray-900 shadow-sm  hover:bg-gray-50 sm:mt-0 sm:w-auto "
                            >
                                Simpan
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

function CardItem({ title, name }) {
    return (
        <div className='py-3 px-3 border-b-[1px] border-b-[#7B4C8233] flex flex-col items-center text-center'>
            <span className='font-second text-xs'>{title}</span>
            <div className='bg-[#7B4C8233] w-[56px] h-[1px] mt-3' />
            <p className='text-primary font-second text-xs mt-1'>
                {name}
            </p>
        </div>
    )
}
function DataTables() {
    return (
        <div className='bg-white rounded-lg border-[1px] border-[#7B4C8233] h-100 w-4/6'>
            <CardItem title="Selamat menikah! Semoga Allah selalu memberikan keberkahan dalam rumah tanggamu." name="Unkown" />
            <CardItem title="Semoga rumah tanggamu penuh berkah." name="Unkown" />
            <CardItem title="Barakallahu lakuma wa baraka ‘alaikuma wa jama’a bainakuma fi khair." name="Unkown" />
            <CardItem title="Selamat berbahagia! Semoga pernikahan kalian menjadi awal dari keluarga yang sakinah, mawaddah, warahmah. Semoga kalian selalu diberikan kesehatan, rezeki yang halal, dan keturunan yang sholeh dan sholehah. Aamiin." name="Unkown" />
            <CardItem title="Barakallahu lakuma! Selamat menempuh hidup baru." name="Unkown" />
            <div className='py-2 px-3 border-b-[1px] border-b-[#7B4C8233] flex justify-between items-center text-center'>
                <p className='font-second text-primary text-xs'>sebelumnya</p>
                <p className='font-second text-primary text-xs'>Selanjutnya</p>
            </div>

        </div>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="relative min-h-screen flex flex-col bg-[#ECE3ED] py-24">

                {/* Top Background Image */}
                <div className="absolute top-10 right-0 h-full z-40">
                    <img src={BorderRight} alt="background" className="w-full h-auto " />
                </div>

                <div className="absolute top-10 left-0 h-full z-40">
                    <img src={BorderLeft} alt="background" className="w-full h-auto " />
                </div>


                <div className="relative z-30 flex flex-col items-center justify-center  animate-fadeInDown rounded-full mx-5">
                    <h1 className="text-[28px] font-semibold text-primary tracking-wide">Ucapan dan Do’a</h1>
                    <span className='px-5 text-center font-second text-xs text-[#303341] mt-1'>Do’a untuk kedua mempelai:</span>
                    {/* <button onClick={() => setOpen(true)} className='bg-primary py-2 px-8 text-white rounded-full mb-5 font-second mt-3 hover:bg-white hover:text-primary '>
                        Kirim Ucapan
                    </button> */}
                </div>

                <div className='relative z-[99999] flex flex-col items-center justify-center top-10 animate-fadeInDown'>
                    <DataTables />
                </div>

                <div className='absolute bottom-0 z-40 w-full'>
                    <img src={BottomFlowers} alt="background" className="w-full h-auto object-cover" />
                </div>
                <div className='absolute bottom-0 right-0 z-40'>
                    <img src={BottomRights} alt="background" className="w-[150px] h-auto object-cover" />
                </div>
                <div className='absolute bottom-0 left-0 z-40'>
                    <img src={BottomLeft} alt="background" className="w-[150px] h-auto object-cover" />
                </div>


            </div>
            {<ShowModal open={open} setOpen={setOpen} />}
        </>

    );
}