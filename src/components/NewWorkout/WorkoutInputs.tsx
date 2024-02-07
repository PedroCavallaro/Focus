"use client";
import { daysOfTheWeek } from "@/src/util/date";
import { ReactNode, useState } from "react";
export default function WorkoutInputs() {
    const [values, setValues] = useState({
        name: "",
        day: 0,
    });

    const handleChange = (
        name: keyof typeof values,
        value: string | number
    ) => {
        setValues(
            (prev) =>
                (prev = {
                    ...prev,
                    [name]: value,
                })
        );
    };

    return (
        <div className="flex justify-between">
            <label htmlFor="" className=" flex flex-col gap-2">
                <p className="text-gray-500 dark:text-gray-400 text-sm ">
                    Nome
                </p>
                <input
                    type="text"
                    name="name"
                    className="border-0 border-b-2 border-gray-300 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-primary focus:outline-none"
                    onChange={(e) =>
                        handleChange(
                            e.target.name as keyof typeof values,
                            e.target.value
                        )
                    }
                />
            </label>
            <label htmlFor="" className="px-4  flex flex-col gap-2 ">
                <p className="text-gray-500 dark:text-gray-400  text-sm">Dia</p>
                <select
                    name="day"
                    id=""
                    className=" text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-primary focus:outline-none focus:ring-0 focus:border-border-orange-primary peer"
                    onChange={(e) =>
                        handleChange(
                            e.target.name as keyof typeof values,
                            Number(e.target.value)
                        )
                    }
                >
                    {Object.keys(daysOfTheWeek).map((day, i) => {
                        return (
                            <option
                                value={day}
                                key={i}
                                className="text-black px-2"
                            >
                                {
                                    daysOfTheWeek[
                                        day as keyof typeof daysOfTheWeek
                                    ]
                                }
                            </option>
                        );
                    })}
                </select>
            </label>
        </div>
    );
}
