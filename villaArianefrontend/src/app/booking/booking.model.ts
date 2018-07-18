export class Booking{
    private _firstName : String;
    private _lastName : String;
    private _startNight : Date;
    private _endNight : Date;
    private _nrOfPersons : number;
    private _wantsSheet : Boolean;
    private _pricePerNight = 60;
    private _pricePerSheet: Number = 5;
    private _totalPrice : number;
    constructor(firstname:string, lastName:string,startNight : Date, endNight : Date, private NrOfPersons : number,private wantsSheet : Boolean){
        this._firstName=firstname;
        this._lastName=lastName;
        this._startNight=startNight;
        this._endNight=endNight;
        this._nrOfPersons=NrOfPersons;
        this._wantsSheet=wantsSheet;
    }
    
    CalculatePrice(){
        let nrOfNights = this._endNight.getDay()-this._startNight.getDay();
        let price = nrOfNights*this._pricePerNight;
        if(this._wantsSheet)
            price+=5*this._nrOfPersons;
        this._totalPrice=price;

    }

    get totalPrice(): number {
        return this._totalPrice;
    }
    toJSON(){
        return {
            firstName : this._firstName,
            lastName : this._lastName,
            startNight : this._startNight,
            endNight : this._endNight,
            NrOfPersons : this._nrOfPersons,
            wantsSheet : this._wantsSheet,
          }
    }
}