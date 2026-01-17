'use client';

import { useState, useEffect, useRef } from 'react';

type SpeedMode = 'slow' | 'standard' | 'fast';

export default function EmdrBilateralPlayer() {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [speedMode, setSpeedMode] = useState<SpeedMode>('standard');
  const [duration, setDuration] = useState(30);
  const [remainingTime, setRemainingTime] = useState(30);
  const [dotPosition, setDotPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  const animationRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastFrameTimeRef = useRef<number>(0);

  const getSpeed = (mode: SpeedMode) => {
    switch (mode) {
      case 'slow': return 0.75;
      case 'standard': return 0.5;
      case 'fast': return 0.325;
    }
  };

  const speed = getSpeed(speedMode);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            setIsFinished(true);
            setDotPosition(0);
            setDirection(1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      timerRef.current = timer;

      return () => clearInterval(timer);
    }
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      const animate = (currentTime: number) => {
        if (!isRunning) return;

        if (lastFrameTimeRef.current === 0) {
          lastFrameTimeRef.current = currentTime;
        }

        const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
        lastFrameTimeRef.current = currentTime;

        const pixelsPerSecond = 100 / speed;
        const movement = pixelsPerSecond * deltaTime;

        setDotPosition((prev) => {
          const newPos = prev + direction * movement;
          if (newPos >= 100) {
            setDirection(-1);
            return 100;
          }
          if (newPos <= 0) {
            setDirection(1);
            return 0;
          }
          return newPos;
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      lastFrameTimeRef.current = 0;
      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastFrameTimeRef.current = 0;
    }
  }, [isRunning, speed, direction]);

  const handleStart = () => {
    setRemainingTime(duration);
    setIsRunning(true);
    setIsFinished(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setDotPosition(0);
    setDirection(1);
    setRemainingTime(duration);
  };

  if (isFinished) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded p-8">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-gray-900 mb-6">0s</div>
          </div>

          <div className="rounded mb-6 relative" style={{ height: '250px' }}>
            <div
              className="absolute top-1/2 rounded-full"
              style={{
                left: '0%',
                width: '56px',
                height: '56px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#00e676',
              }}
            ></div>
          </div>

          <div className="text-center mb-6">
            <p className="text-xl text-gray-800 mb-6">¿Qué notaste distinto?</p>
            <button
              onClick={handleStart}
              className="px-6 py-2 rounded bg-gray-900 text-white hover:bg-gray-800"
            >
              Volver a empezar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded p-8">
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-gray-900 tabular-nums">
            {remainingTime}s
          </div>
        </div>

        <div className="rounded mb-6 relative" style={{ height: '250px' }}>
          <div
            className="absolute top-1/2 rounded-full"
            style={{
              left: `${dotPosition}%`,
              width: '56px',
              height: '56px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#00e676',
            }}
          ></div>
        </div>

        <div className="text-center mb-6">
          <button
            onClick={isRunning ? handleStop : handleStart}
            className="px-6 py-2 rounded bg-gray-900 text-white hover:bg-gray-800"
          >
            {isRunning ? 'Detener' : 'Iniciar'}
          </button>
        </div>

        <div className="space-y-4 max-w-sm mx-auto">
          <div>
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setSpeedMode('slow')}
                disabled={isRunning}
                className={`flex-1 py-2 text-sm rounded ${
                  speedMode === 'slow'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700'
                } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 hover:text-white'}`}
              >
                Lento
              </button>
              <button
                onClick={() => setSpeedMode('standard')}
                disabled={isRunning}
                className={`flex-1 py-2 text-sm rounded ${
                  speedMode === 'standard'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700'
                } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 hover:text-white'}`}
              >
                Estándar
              </button>
              <button
                onClick={() => setSpeedMode('fast')}
                disabled={isRunning}
                className={`flex-1 py-2 text-sm rounded ${
                  speedMode === 'fast'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700'
                } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 hover:text-white'}`}
              >
                Rápido
              </button>
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-600 mb-2">{duration}s</div>
            <input
              type="range"
              min="10"
              max="120"
              step="5"
              value={duration}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setDuration(value);
                if (!isRunning) {
                  setRemainingTime(value);
                }
              }}
              disabled={isRunning}
              className={`w-full accent-gray-900 ${
                isRunning ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
