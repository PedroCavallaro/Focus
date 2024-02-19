import Link from "next/link";

export default function UserNotAuthenticated() {
    return (
        <section className="flex justify-center items-center h-[70dvh] w-full ">
            <div className="flex justify-center items-center flex-col p-5">
                <p className="p-5">Parece que você não está logado</p>

                <Link
                    href={"/auth/login"}
                    className="p-2 bg-orange-primary text-black w-full rounded-lg text-center"
                >
                    Criar conta
                </Link>
            </div>
        </section>
    );
}
