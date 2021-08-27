import bot from '../bot';
import { Startvc } from './startvc';
import { JioSaavnPlay } from './jiosaavn';
import { YTPlay } from './youtube';
import { Pause, Resume, Skip, Stop } from './controls';
import { QueueList } from './queue';

export const InitHandlers = (): void => {
    bot.use(Startvc);
    bot.use(JioSaavnPlay);
    bot.use(YTPlay);
    bot.use(Pause);
    bot.use(Resume);
    bot.use(Skip);
    bot.use(Stop);
    bot.use(QueueList);
}
