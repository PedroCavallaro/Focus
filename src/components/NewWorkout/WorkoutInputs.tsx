"use client";
import { daysOfTheWeek } from "@/src/util/date";
import { Workout } from "../../@types/types";

interface WorkoutInputsProps {
    handleNameAndDay: (name: keyof Workout, value: string | number) => void;
}

export default function WorkoutInputs({
    handleNameAndDay,
}: WorkoutInputsProps) {
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
                        handleNameAndDay(
                            e.target.name as keyof Workout,
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
                    defaultValue={"Escolher Dia"}
                    className=" text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-primary focus:outline-none focus:ring-0 focus:border-border-orange-primary peer"
                    onChange={(e) =>
                        handleNameAndDay(
                            e.target.name as keyof Workout,
                            Number(e.target.value)
                        )
                    }
                >
                    <option value="Escolher Dia" disabled hidden>
                        Escolher Dia
                    </option>
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
