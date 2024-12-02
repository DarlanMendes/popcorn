export class Pagination<T>{
    constructor(
        public page:number,
        public results:Array<T>,
        public total_pages:number,
        public total_results:number
    ){}
}