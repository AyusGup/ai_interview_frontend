export default function Header() {
    return (
        <div className="z-50 fixed w-full bg-[#333]">
            <header className="flex justify-between items-center pt-4 pb-4 px-12">
                <h1 className="text-lg lg:text-3xl font-bold">InterviewGuru</h1>
                <button className="px-4 py-2 bg-yellow-500 rounded-xl border border-gray-300">Get started</button>
            </header>
            <hr />
        </div>
    );
}