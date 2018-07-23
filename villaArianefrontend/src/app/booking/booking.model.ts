export class Booking{

    private _id: string;
    private _userName : String;
    private _startNight : Date;
    private _endNight : Date;
    private _nrOfPersons : number;
    private _wantsSheet : Boolean;
    // private _pricePerNight = 60;
    // private _pricePerSheet: number = 5;
    // private _totalPrice : number;
     private _chef: string;

    constructor(userName : String ,startNight : Date, endNight : Date,  NrOfPersons : number, wantsSheet : Boolean){
        this._userName = userName;
        this._startNight=startNight;
        this._endNight=endNight;
        this._nrOfPersons=NrOfPersons;
        this._wantsSheet=wantsSheet;
    }
    get userName() : String{
        return this._userName;
    }
    get startNight() : Date{
        return this._startNight;
    }
    get endNight() : Date{
        return this._endNight;
    }
    get nrOfPersons() : Number{
        return this._nrOfPersons;
    }
    get wantsSheet() : Boolean{
        return this._wantsSheet;
    }
    // get totalPrice() : number {
    //     return this._totalPrice;
    // }
    // CalculatePrice(){
    //     let nrOfNights = this._endNight.getDay()-this._startNight.getDay();
    //     let price = nrOfNights*this._pricePerNight;
    //     if(this._wantsSheet)
    //         price+=5*this._nrOfPersons;
    //     this._totalPrice=price;

    // }
    
    toJSON(){
        return {
            userName : this._userName,
            startNight : this._startNight,
            endNight : this._endNight,
            NrOfPersons : this._nrOfPersons,
            wantsSheet : this._wantsSheet,
          }
    }

    static fromJSON(json: any): Booking {
        const rec = new Booking(
            json._userName,
            json._startNight,
            json._endNight,
            json._nrOfPersons,
            json._wantsSheet
        );
        rec._id = json._id;
        rec._chef = json.chef;
        return rec;
      }


}