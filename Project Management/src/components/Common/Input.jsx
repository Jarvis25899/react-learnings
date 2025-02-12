export default function Input({ label, textArea, ...props }) {
  const inputClasses =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea className={inputClasses} {...props} />
      ) : (
        <input className={inputClasses} {...props} />
      )}
    </>
  );
}
