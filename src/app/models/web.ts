
export class Web {
  private static proto = 'http://';
  private static hostname = 'localhost:8093';

  public static buildRestUrl(path: string): string {
    const result: string = this.proto + this.hostname + '/restapi/' + path;

    return result;
  }
}
