export default function Stat(language : any) {
    const { name, count, percent } = language

    const style: React.CSSProperties = {
        width: `${percent}%`
    }

    return (
            <div className="my-8 w-full">
                <ul className="mb-4 flex justify-between">
                    <li className="dark:text-white">{name} <span className="text-gray-400"> · {count} Projects</span></li>
                    <li className="text-sky-400">{percent}%</li>
                </ul>
                <div className="w-full rounded-full h-2.5 bg-gray-200 dark:bg-gray-700">
                    <div style={style} className={`rounded-full h-2.5 bg-sky-400`}></div>
                </div>
            </div>
    )
}