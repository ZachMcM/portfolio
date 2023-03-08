export default function RepoCard(repo : any) {
    const { name, description, url, language, homepage } = repo
    return (
        <div className="p-10 mb-8 lg:mb-0 w-full rounded-2xl shadow-xl hover:scale-105 ease-in-out duration-1000 cursor-pointer">
            <div className="h-5/6">
                <p className="capitalize md:text-lg">{name}</p>
                <p className="text-gray-400 mt-3">{description}</p>
            </div>
            <div className="my-5 flex justify-between">
            <ul className="flex text-lg">
                <li mr-3><a className="text-emerald-500 hover:text-emerald-600 mr-5" href={url}><i className="fa-brands fa-github"></i></a></li>
                {
                homepage != '' &&
                <li><a className="text-emerald-500 hover:text-emerald-600" href={homepage}><i className="fa-solid fa-external-link"></i></a></li>
                }
            </ul>
            <div className="flex items-center text-sm">
                <p className="text-gray-400 mr-3">{language}</p>
                <i className={"fa-solid text-emerald-500 fa-" + language}></i>
            </div>
            </div>
        </div>
    )
}