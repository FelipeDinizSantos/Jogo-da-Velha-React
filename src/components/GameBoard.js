export default function GameBoard(props)
{
    return(
        <div className="gameBoard">
            <div className="gameBoardRow">
                <div className="gameBoardHouse" data-position='00' onClick={(e)=>props.play(e)}>{props.game[0][0]}</div>
                <div className="gameBoardHouse" data-position='01' onClick={(e)=>props.play(e)}>{props.game[0][1]}</div>
                <div className="gameBoardHouse" data-position='02' onClick={(e)=>props.play(e)}>{props.game[0][2]}</div>
            </div>
            <div className="gameBoardRow">
                <div className="gameBoardHouse" data-position='10' onClick={(e)=>props.play(e)}>{props.game[1][0]}</div>
                <div className="gameBoardHouse" data-position='11' onClick={(e)=>props.play(e)}>{props.game[1][1]}</div>
                <div className="gameBoardHouse" data-position='12' onClick={(e)=>props.play(e)}>{props.game[1][2]}</div>
            </div>
            <div className="gameBoardRow">
                <div className="gameBoardHouse" data-position='20' onClick={(e)=>props.play(e)}>{props.game[2][0]}</div>
                <div className="gameBoardHouse" data-position='21' onClick={(e)=>props.play(e)}>{props.game[2][1]}</div>
                <div className="gameBoardHouse" data-position='22' onClick={(e)=>props.play(e)}>{props.game[2][2]}</div>
            </div>
        </div>
    );
}