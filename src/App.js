import {useState} from 'react';
import GameBoard from './components/GameBoard';
import ButtonResetPlay from './components/ButtonResetPlay';
import './assets/stylesheets/App.css';

function App() 
{
    const initialGame = [['','',''],['','',''],['','','']];

    const [game, setGame] = useState([['','',''],['','',''],['','','']]);
    const [currentSymbol, setCurrentSymbol] = useState('X');
    const [isPlaying, setPlaying] = useState(true);

    const checkVictory = ()=>
    {
        // Rows Verify
        let points = 0;
        let victory = false;

        for(let row=0; row<3; row++)
        {
            points = 0;
            for(let column = 0; column<3; column++)
            {
                if(game[row][column] === currentSymbol)
                {
                    points++;
                }
            }
            if(points >= 3)
            {

                victory = true;
                break;
            }
        }

        // Columns Verify
        for(let column = 0; column<3; column++)
        {
            points = 0;
            for(let row = 0; row<3; row++)
            {
                if(game[row][column] === currentSymbol)
                {
                    points++;
                }
            }
            if(points >= 3)
            {
                victory = true;

                break;
            }
        }

        // Diagonals Verify
        points = 0;
        for(let diagonal = 0; diagonal<3; diagonal++)
        {
            if(game[diagonal][diagonal] === currentSymbol)
            {
                points++;
            }
        }
        if(points >= 3)
        {
            victory = true;
        }

        points = 0;
        let row = 0;

        for(let column = 2; column>=0; column--)
        {
            if(game[row][column] === currentSymbol)
            {
                points++;
            }

            row++
        }
        if(points >= 3)
        {
            victory = true;
        }

        return victory;
    };

    const changePlayer = ()=>
    {
        currentSymbol === 'X' ? setCurrentSymbol('O') : setCurrentSymbol('X');
    };

    const returnPosition = (element)=>
    {
        const position = element.target.getAttribute('data-position'); 
        return [parseInt(position.substring(0, 1), 10), parseInt(position.substring(1, 2), 10)];
    };

    const checkEmptySpaces = (element)=>
    {
        if(game[returnPosition(element)[0]][returnPosition(element)[1]] === '') return true;
        return false;
    };

    const haveEmptySpaces = () => 
    {
        for (let row = 0; row < game.length; row++) 
        {
          for (let house = 0; house < game[row].length; house++) if (game[row][house] !== 'X' && game[row][house] !== 'O') return true; 
        }
        return false;
    };

    const play = (element)=>
    {
        if(isPlaying)
        {
            if(checkEmptySpaces(element))
            {
                game[returnPosition(element)[0]][returnPosition(element)[1]] = currentSymbol;
                changePlayer();

                if(checkVictory())
                {
                    changePlayer();
                    setTimeout(() => {
                        alert('Jogador ' + currentSymbol + ' venceu!');
                    }, 0);
                    setPlaying(false);
                    return;
                }

                if(!haveEmptySpaces())
                {
                    setTimeout(() => {
                        alert('Empate!');
                    }, 0);
                    setPlaying(false);
                }
            }
            else
            {
                alert('Jogada invalida!');
            }
        }
    };

    const resetGame = ()=>
    {
        setPlaying(true);
        setGame(initialGame);
        setCurrentSymbol('X');
    }

    return(
        <>
            <div>
                <p>Vez de: {currentSymbol}</p>
            </div>
            <div>
                <GameBoard game={game} play={play} />
            </div>
            <div>
                <ButtonResetPlay isPlaying={isPlaying} resetGame={resetGame} />
            </div>
        </>
    );
}

export default App;