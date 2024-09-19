export class Investment {
  constructor(
    public id?: Number | null,
    public name?: string,
    public amount?:number,
    public indicadorCarencia?: boolean,
    public stocks?: any[] | null,
    public createdAt?: any,
    public updated?:any,
  ) {}
}