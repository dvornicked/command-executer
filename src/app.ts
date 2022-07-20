import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor';
import { PromptService } from './core/prompt/prompt.service';
import { ConsoleLogger } from './out/console-logger/console-logger';

export class App {
  async run() {
    new FfmpegExecutor(ConsoleLogger.getInstance()).execute()
  }
}

const app = new App()
app.run()