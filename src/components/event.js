import { useState } from "react";
import { useEffect } from "react";

function BoxTime({ time, title }) {
    return (
        <div data-aos="zoom-in" className="rounded-[16px] w-[80px] px-6 py-4 bg-opacity-80 flex flex-col justify-start items-center text-white bg-white">
            <p className="text-[28px] font-semibold text-primary">{time}</p>
            <span className="text-xs text-primary font-second text-opacity-80">{title}</span>
        </div>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const googleCalendarUrl = 'https://calendar.app.google/QeHm9eThKfnUCupi7'
    const targetDate = new Date("2024-10-12T08:00:00"); // Set the target date and time

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    });


    return (
        <div className="flex flex-col justify-center bg-primary items-center text-white py-10">
            <p className="text-[28px] font-bold ">Acara Pernikahan</p>
            <p className="font-second font-xs">Menuju momen istimewa dalam: </p>
            <div className="flex gap-3 my-5">
                <BoxTime time={timeLeft.days} title="Hari" />
                <BoxTime time={timeLeft.hours} title="Jam" />
                <BoxTime time={timeLeft.minutes} title="Menit" />
                <BoxTime time={timeLeft.seconds} title="Detik" />
            </div>

            <p className="text-[#ECE3ED] font-bold text-lg">Sabtu, 12 Oktober 2024</p>

            <a href={googleCalendarUrl} className="py-2 px-6 bg-[#ECE3ED] rounded-full text-primary font-second mt-3">
                Simpan Acara ke Kalender
            </a>

        </div>
    );
}