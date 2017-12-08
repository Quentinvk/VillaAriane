export class booking{
    private _firstName : String;
    private _lastName : String;
    private _startNight : Date;
    private _endNight : Date;
    private _NrOfPersons : number;
    private _wantsSheet : Boolean;
    private _PricePerNight = 60;
    private _PricePerSheet: Number = 5;
    constructor(firstname:string, lastName:string,startNight : Date, endNight : Date,private NrOfPersons : number,private wantsSheet : Boolean){
        this._firstName=firstname;
        this._lastName=lastName;
        this._startNight=startNight;
        this._endNight=endNight;
        this._NrOfPersons=NrOfPersons;
        this._wantsSheet=wantsSheet;
    }
    
    getPrice(){
        let nrOfNights = this._endNight.getDay()-this._startNight.getDay();
        let price = nrOfNights*this._PricePerNight;
        if(this._wantsSheet)
            price+=5*this._NrOfPersons;
        return price;
    }
}