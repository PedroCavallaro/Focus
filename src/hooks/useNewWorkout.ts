import { useState } from "react";
import { serverApi } from "../lib/api";
import { useQuery } from "react-query";
import { Exercises, Workout } from "../@types/types";

type ExerciseResponse = [
    {
        targetMuscle: string;
        exercises: [
            {
                name: string;
                description: string;
                gifUrl: string;
                _id: string;
            }
        ];
    }
];

async function getExercises() {
    const { data } = await serverApi.get("exercise/list");

    return data;
}
export function useNewWorkout() {
    const [muscleId, setMuscleId] = useState(-1);
    const [workout, setWorkout] = useState<Workout>({} as Workout);

    const { data, isLoading } = useQuery<ExerciseResponse>(
        "exercises",
        getExercises
    );

    const handleClick = (muscleIndex: number) => {
        setMuscleId((prev) => (prev = muscleIndex));
    };

    const saveNewExercise = (
        exercise: keyof Workout,
        id: number,
        gifUrl: string,
        kg?: number,
        reps?: number
    ) => {
        if (workout.exercises) {
            const { exercises } = workout;
            const exerciseAlreadyAdded = exercises.filter(
                (e) => e.exercise === exercise
            );

            if (exerciseAlreadyAdded.length) {
                exercises.map((e) => {
                    if (e.exercise === exercise) {
                        const { exec } = e;

                        const isAlreay = exec.filter((e) => e.i === id);

                        if (isAlreay.length) {
                            exec.map((inp) => {
                                if (inp.i === id) {
                                    inp.kg = kg ? kg : inp.kg;
                                    inp.reps = reps ? reps : inp.reps;
                                }
                                return;
                            });
                            return;
                        }
                        exec.push({
                            i: id,
                            kg: kg!,
                            reps: reps!,
                        });
                    }
                });
                return;
            }
            workout.exercises.push({
                exercise,
                gifUrl,
                exec: [
                    {
                        i: id,
                        kg: kg!,
                        reps: reps!,
                    },
                ],
            });
            return;
        }

        workout.exercises = [
            {
                exercise,
                gifUrl,
                exec: [
                    {
                        i: id,
                        kg: kg!,
                        reps: reps!,
                    },
                ],
            },
        ];
        return;
    };
    const handleNameAndDay = (name: keyof Workout, value: string | number) => {
        setWorkout(
            (prev) =>
                (prev = {
                    ...prev,
                    [name]: value,
                })
        );
    };
    return {
        handleNameAndDay,
        workout,
        setWorkout,
        saveNewExercise,
        muscleId,
        handleClick,
        data,
        isLoading,
    };
}

//  if (workout.exercises) {
//      const newWorkout = workout.exercises.map((e) => {
//          if (e.exec.length) {
//              if (e.exercise === exercise) {
//                  e.exec.map((exec) => {
//                      if (exec.i === id) {
//                          (exec.kg = kg!), (exec.reps = reps!);
//                      }
//                  });
//              }
//              return;
//          }
//          e.exec.push({
//              i: id,
//              kg: kg!,
//              reps: reps!,
//          });
//      });
//      setWorkout(
//          (prev) =>
//              (prev = {
//                  ...prev,
//                  name: prev.name,
//                  day: prev.day,
//                  newWorkout,
//              })
//      );
//      console.log(workout);
//      return;
//  }
//  const newWorkout = (workout.exercises = [
//      {
//          exercise: exercise,
//          gifUrl: "",
//          exec: [
//              {
//                  i: id,
//                  kg: kg!,
//                  reps: reps!,
//              },
//          ],
//      },
//  ]);
//  setWorkout(
//      (prev) => (prev = { ...prev, name: prev.name, day: prev.day, newWorkout })
//  );
//  console.log(workout);
