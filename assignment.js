// https://github.com/newazCS/Assignment3

// Convert kilometer To Meter using function
function kilometerToMeter(num){ 
    var Meter = num * 1000;
    return Meter;
}
var  ConvertKTM = kilometerToMeter(5);
console.log(ConvertKTM);

// Budget Calculator  using Function
function budgetCalculator(NumOfWatch, NumOfPhone, NumOfLaptop){
        var watch = 50;     // price of each watch 
        var phone = 100;    //price of each phone
        var laptop =  500;  //price of each laptop

        watch = watch * NumOfWatch;
        phone = phone * NumOfPhone;
        laptop = laptop * NumOfLaptop;
        totalPrice = watch + phone + laptop;

        return totalPrice;
}
var  totalPriceAmount = budgetCalculator(2,1,2);
console.log(totalPriceAmount); 

//  Hotal cost  culcution using function t
function hotelCost (days){
    var price = 0;

    if (days >1 && days <=10){
        price = days * 100;
    } else if (days >=11 && days <=20){
        var firstprice = 10 * 100;
        var remainingdays = days - 10;
        var secDays = remainingdays *80;
        price = firstprice + secDays;
    }else{
        var firstprice = 10* 100;
        var secondprice = 10*80;
        var remaining = days - 20;
        var thirdprice = remaining * 50;
        price= firstprice + secondprice + thirdprice;
    }
return price;
}
var PriceAmount = hotelCost(21);
console.log(PriceAmount); 

// megaFriend 

function megaFriend(friendList){
    var size  = 0;
    var longestName;
    for(var i=0;i< friendList.length; i++){
        if (friendList.length>size){
            size =friendList[i].length;
            longestName=friendList[i];
        }
    }
return longestName;
}
var arrList = ['Mohammad','Newaz','Noman'];
var longName = megaFriend(arrList);
console.log(longName);


