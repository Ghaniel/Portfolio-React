export default function Footer() {
  return (
    <footer className="px-2 py-4 transition-all duration-500">
      {/* - Light Mode: BG Abu-abu Slate padat (bg-slate-200) agar beda dengan background putih.
        - Dark Mode: BG Abu-abu lebih terang (dark:bg-neutral-800) + Border terang agar terlihat bentuk kotaknya.
      */}
      <div className="flex items-center justify-center text-center px-7 py-8 
                      bg-slate-200 border border-slate-300
                      dark:bg-neutral-800 dark:border-neutral-700
                      rounded-3xl transition-all duration-500 shadow-xl">
        
        <p className="w-full text-sm md:text-base font-bold leading-relaxed transition-colors">
          <span className="text-black dark:text-gray-400">© 2026</span> 
          <span className="mx-2 text-black dark:text-white uppercase tracking-widest">
            Ghaniel's Portfolio
          </span>
        </p>
      </div>
    </footer>
  );
}