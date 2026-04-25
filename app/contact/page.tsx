export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-4xl">Contact Us</h1>

      <form className="mt-6 flex flex-col gap-4 max-w-md">
        <input placeholder="Name" className="p-2 border" />
        <input placeholder="Email" className="p-2 border" />
        <textarea placeholder="Message" className="p-2 border" />
        <button className="bg-purple-600 p-2 text-white">
          Send
        </button>
      </form>
    </div>
  );
}