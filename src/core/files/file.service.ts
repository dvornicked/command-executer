import { promises } from 'fs'
import { dirname, isAbsolute, join } from 'path'

export class FileService {
  private async isExists(path: string) {
    try {
      await promises.stat(path)
      return true
    } catch {
      return false
    }
  }

  getFilePath(path: string, name: string, ext: string): string {
    if (!isAbsolute(path)) path = join(__dirname + '/' + path)
    return join(dirname(path) + '/' + name + '.' + ext)
  }

  async deleteFileIfExists(path: string) {
    if (await this.isExists(path)) {
      promises.unlink(path)
    }
  }
}
