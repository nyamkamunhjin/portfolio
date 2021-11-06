export type TicketColor = keyof typeof Gradients;

export enum Gradients {
  greenBlue = 'from-green-400 to-blue-500',
  pinkPurpleIndigo = 'from-pink-300 via-purple-300 to-indigo-400',
  pinkRedYellow = 'from-pink-500 via-red-500 to-yellow-500',
  greenBluePurple = 'from-green-300 via-blue-500 to-purple-600',
  spearmint = 'from-green-200 via-green-400 to-green-500',
  mojave = 'from-yellow-100 via-yellow-300 to-yellow-500',
}

export interface IWave {
  waver: string;
  timestamp: number;
  message: string;
  color: string;
}

export interface ICleanedWave {
  address: string;
  timestamp: Date;
  message: string;
  color: TicketColor;
}
