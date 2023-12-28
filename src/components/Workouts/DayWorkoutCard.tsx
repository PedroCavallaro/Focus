import { HiOutlinePencil } from "react-icons/hi";
export default function DayWorkoutCard() {
    return (
        <div className="bg-black rounded-[10px] p-3 min-h-[15rem] max-h-[18rem]  w-full flex flex-col gap-5">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-lg font-bold">Supino Reto</h3>
                    <p>PR: 30kg</p>
                </div>
                <button className="relative -top-4">
                    <HiOutlinePencil />
                </button>
            </div>
            <div className="flex justify-between">
                <ul className="text-md font-light flex flex-col gap-[12px]">
                    <li>1 serie: 10 reps x 22,5kg</li>
                    <li>1 serie: 10 reps x 22,5kg</li>
                    <li>1 serie: 10 reps x 22,5kg</li>
                    <li>1 serie: 10 reps x 22,5kg</li>
                </ul>
                <div>
                    <div className="w-36 h-full bg-white  rounded-[5px]" />
                </div>
            </div>
        </div>
    );
}
