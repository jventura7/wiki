export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="p-10 text-6xl font-bold">wiki.</div>
      <div>
        <label className="mr-2" htmlFor="query">
          Search:
        </label>
        <input
          className="border-b border-gray-600 transition duration-500 focus:border-b-orange-400 focus:outline-none"
          id="query"
          name="query"
          type="text"
        ></input>
      </div>
    </main>
  );
}
