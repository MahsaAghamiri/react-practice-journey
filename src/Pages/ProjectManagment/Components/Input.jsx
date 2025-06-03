export default function Input({ textarea, lable, ...props }) {
  const classes =
    "p-1 border-b-2 rotate-sm border-violet-300 text-violet-600 bg-violet-200 focus:outline-none focus:border-violet-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-lg font-black uppercase text-violet-500">
        {lable}
      </label>

      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} type="text" />
      )}
    </p>
  );
}
