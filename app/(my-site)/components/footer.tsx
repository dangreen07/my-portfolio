export default async function Footer() {
    return (
        <footer className="py-10 text-sm text-slate-500 border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                <div>© {new Date().getFullYear()} Daniel Green</div>
                <div className="flex gap-4">
                </div>
            </div>
        </footer>
    )
}