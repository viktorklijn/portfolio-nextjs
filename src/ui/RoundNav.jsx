export const RoundNav = () => {
    const navItems = [{label: 'Home', href: '/'}, {label: 'Skills', href: '/skills'}, {label: 'Jobs', href: '/jobs'},];

    return (<nav className="w-full fixed flex flex-row justify-center">
            <div className="w-3/4 bg-background rounded-2xl m-10 py-2 px-10">
                <div className={"flex flex-row justify-evenly"}>
                    <div className="w-1/2 flex flex-row justify-start gap-10 items-center">
                        <a href="" className="text-text-primary font-bold text-xl align-middle">Viktor Klijn</a>
                        <div className="flex flex-row">
                            {navItems.map((item) => {
                                return <a href={item.href}
                                          className="px-4 py-2 rounded-xl hover:bg-secondary-background text-text-primary font-semibold">{item.label}</a>
                            })}
                        </div>
                    </div>
                    <div className=" w-1/2 flex flex-row justify-end items-center">
                        <a href=""
                           className="px-4 py-2 rounded-xl bg-secondary-background hover:bg-accent-2 text-text-primary font-semibold">Contact
                            me</a>
                    </div>
                </div>
            </div>
        </nav>)
}
