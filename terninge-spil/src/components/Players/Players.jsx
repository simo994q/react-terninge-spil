import style from './Players.module.scss'

export function Players(props) {
    return (
        <div className={style.playerContainer}>
            <h2 className={style.playerNumber}>Spiller {props.player.number}</h2>
            <div className={style.playerDiceRoll}>
                <h3>Du slog:</h3>
                <p>{props.player.recentDiceRoll}</p>
            </div>
            <h3 className={style.playerPoints}>Point: {props.player.points}</h3>
        </div>
    )
}