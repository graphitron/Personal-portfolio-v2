import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const GRID_SIZE = 15;
const CELL_SIZE = 16;
const SPEED = 150;

type Point = { x: number; y: number };

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Point[]>([{ x: 5, y: 5 }]);
  const [food, setFood] = useState<Point>({ x: 10, y: 10 });
  const [direction, setDirection] = useState<Point>({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  
  const boardRef = useRef<HTMLDivElement>(null);

  const generateFood = useCallback((): Point => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }, []);

  const resetGame = () => {
    setSnake([{ x: 5, y: 5 }]);
    setFood(generateFood());
    setDirection({ x: 1, y: 0 });
    setGameOver(false);
    setIsPlaying(true);
    setScore(0);
  };

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveSnake = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Self collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Eat food
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 1);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(moveSnake);
  }, [isPlaying, gameOver, direction, food, generateFood]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, direction]);

  return (
    <div className="border border-blueprint-primary bg-white p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="bg-blueprint-bg p-4">
        <div className="flex justify-between items-center mb-4 font-mono text-xs uppercase tracking-widest text-blueprint-primary">
           <span>System_Game.exe</span>
           <span>Score: {score}</span>
        </div>
        
        <div 
           ref={boardRef}
           className="relative bg-white border border-blueprint-border mx-auto"
           style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
        >
           {/* Grid Lines */}
           <div className="absolute inset-0 opacity-20 pointer-events-none bg-[size:16px_16px] bg-grid-pattern"></div>
           
           {!isPlaying && !gameOver && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
                <button onClick={resetGame} className="flex items-center gap-2 bg-blueprint-primary text-white px-4 py-2 text-xs font-bold uppercase hover:bg-black/80 transition">
                   <Play className="w-3 h-3" /> Start System
                </button>
                <p className="mt-2 text-[9px] text-blueprint-muted font-mono">Use Arrow Keys</p>
             </div>
           )}
           
           {gameOver && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 z-10">
                <div className="text-blueprint-primary font-bold mb-2">SYSTEM CRASH</div>
                <button onClick={resetGame} className="flex items-center gap-2 border border-blueprint-primary text-blueprint-primary px-4 py-2 text-xs font-bold uppercase hover:bg-blueprint-primary hover:text-white transition">
                   <RotateCcw className="w-3 h-3" /> Reboot
                </button>
             </div>
           )}

           {/* Snake */}
           {snake.map((segment, i) => (
              <div 
                key={i}
                className="absolute bg-blueprint-primary"
                style={{
                   left: segment.x * CELL_SIZE,
                   top: segment.y * CELL_SIZE,
                   width: CELL_SIZE - 1,
                   height: CELL_SIZE - 1,
                }}
              />
           ))}
           
           {/* Food */}
           <div 
              className="absolute bg-red-500 rounded-full"
              style={{
                 left: food.x * CELL_SIZE,
                 top: food.y * CELL_SIZE,
                 width: CELL_SIZE - 2,
                 height: CELL_SIZE - 2,
                 transform: 'translate(1px, 1px)'
              }}
           />
        </div>
        
        {/* Touch Controls for Mobile */}
        <div className="mt-4 grid grid-cols-3 gap-2 md:hidden">
           <div></div>
           <button className="bg-blueprint-border p-2 rounded active:bg-blueprint-primary active:text-white" onClick={() => direction.y === 0 && setDirection({x: 0, y: -1})}>↑</button>
           <div></div>
           <button className="bg-blueprint-border p-2 rounded active:bg-blueprint-primary active:text-white" onClick={() => direction.x === 0 && setDirection({x: -1, y: 0})}>←</button>
           <button className="bg-blueprint-border p-2 rounded active:bg-blueprint-primary active:text-white" onClick={() => direction.y === 0 && setDirection({x: 0, y: 1})}>↓</button>
           <button className="bg-blueprint-border p-2 rounded active:bg-blueprint-primary active:text-white" onClick={() => direction.x === 0 && setDirection({x: 1, y: 0})}>→</button>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;