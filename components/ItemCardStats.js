export default function ItemCardStats({ stats }) {
    return (
        <div>
            {/*Combat Equipment Stats*/}
            <p className="text-center font-semibold text-slate-400">Stats</p>
            <div className="flex justify-between border-b border-slate-400 mb-3">
                {
                    stats.hasOwnProperty('attack')
                    ? <p className="flex text-14 font-bold text-slate-400 dark:text-slate-400">
                        {stats.attack} ATK
                    </p>
                    : ''
                }
                {
                    stats.hasOwnProperty('health')
                    ? <p className="flex text-14 font-bold text-slate-400 dark:text-slate-400">
                        {stats.health} HP
                    </p>
                    : ''
                }
                {
                    stats.hasOwnProperty('defense')
                    ? <p className="flex text-14 font-bold text-slate-400 dark:text-slate-400">
                        {stats.defense} DEF
                    </p>
                    : ''
                }
            </div>
        </div>
    )
}