export default function RepoCard(repo : any) {
    const { name, description, url, language, homepage } = repo
    return (
        <div className="p-10 my-5 w-full rounded-2xl shadow-xl xl:w-80 xl:mr-7 hover:scale-105 ease-in-out duration-1000 cursor-pointer">
            <div className="h-5/6">
                <p className="capitalize md:text-lg">{name}</p>
                <p className="text-gray-400 mt-3">{description}</p>
            </div>
            <div className="my-5 flex justify-between">
            <ul className="flex text-lg">
                <li mr-3><a className="text-sky-400 hover:text-sky-500 mr-5" href={url}><i className="fa-brands fa-github"></i></a></li>
                {
                homepage != '' &&
                <li><a className="text-sky-400 hover:text-sky-500" href={homepage}><i className="fa-solid fa-external-link"></i></a></li>
                }
            </ul>
            <div className="flex items-center text-sm">
                <p className="text-gray-400 mr-3">{language}</p>
                <i className={"fa-solid text-sky-400 fa-" + language}></i>
            </div>
            </div>
        </div>
    )
}