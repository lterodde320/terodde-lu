export default function Footer() {
    return (
        <footer className="h-20 flex items-center justify-center">
            <div className="container mx-auto">
                <p className="text-center text-gray-500 dark:text-gray-400">
                    Made with ♥️ by Leandro Terodde, &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>   
    )
}