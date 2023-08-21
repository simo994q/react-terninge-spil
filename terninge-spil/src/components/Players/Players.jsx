import style from './Players.module.scss'

export function Players(props) {
    return (
        <div className={style.playerContainer}>
            <h2 className={style.playerNumber}>Spiller</h2>
            <div className={style.playerDiceRoll}>
                <h3>Du slog:</h3>
                <p></p>
            </div>
            <h3 className={style.playerPoints}>Point: </h3>
        </div>
    )
}

// {props.player.number}
// {props.player.recentDiceRoll}
// {props.player.points}