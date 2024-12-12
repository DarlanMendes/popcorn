export class Series {
    constructor(
      public backdrop_path?: string,
      public first_air_date?: string,
      public genre_ids?: string,
      public id?: number,
      public name?: string,
      public origin_country?: number[],
      public original_language?: string,
      public original_name?: string,
      public overview?: string,
      public popularity?: number,
      public poster_path?: string,
      public vote_average?: number,
      public vote_count?: number,
    ) {}
  }
  export class Genres {
    constructor(public id: string, public name: string) {}
  }
  