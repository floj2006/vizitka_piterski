export default function Footer() {
  return (
    <footer className="border-t border-white/6">
      <div className="container-x py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-display font-black text-bg text-[10px]">
            ДП
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-xs text-white/80">Дмитрий Питерский</div>
            <div className="text-[10px] text-white/30">ведущий мероприятий</div>
          </div>
        </div>
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Дмитрий Питерский
        </p>
        <a href="#booking" className="btn-primary !py-2 !px-4 !text-xs">
          Забронировать
        </a>
      </div>
    </footer>
  );
}
