export default function ButtonResetPlay(props)
{
    if(!props.isPlaying)
    {
        return(
            <button onClick={()=> props.resetGame()}>Jogar Novamente</button>
        )
    }
}