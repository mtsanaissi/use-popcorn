function Header({ children }: { children: React.ReactNode }) {
    return (
        <header className="border-b border-primary/20 sticky top-0 z-50">
            <div className="container flex items-center justify-between gap-12">
                <Logo />
                {children}
            </div>
        </header>
    )
}

const Logo = () => {
    return (
        <a
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-secondary font-bold text-lg">P</span>
            </div>
            <span className="hidden md:block text-primary font-semibold text-xl">usePopcorn</span>
        </a>
    );
};

export default Header
