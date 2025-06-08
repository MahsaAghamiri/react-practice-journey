export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-10 py-4 md:text-base rounded-lg !text-xl text-violet-950 rotate-md bg-violet-100 hover:bg-violet-200 hover:shadow-sm hover:shadow-violet-100"
    >
      {children}
    </button>
  );
}
