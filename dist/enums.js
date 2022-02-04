//Enum : A reserved word to creat enumerable.
var statuss = {
    notStart: 0,
    inProgress: 1,
    done: 2
};
console.log(statuss.inProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStart"] = 0] = "NotStart";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done"; // enum value 2 because 2nd element
})(StatusEnum || (StatusEnum = {}));
var StatusEnum2;
(function (StatusEnum2) {
    StatusEnum2["NotStart"] = "notStart";
    StatusEnum2["InProgress"] = "inProgress";
    StatusEnum2["Done"] = "done";
})(StatusEnum2 || (StatusEnum2 = {}));
console.log(StatusEnum.InProgress); //  1
console.log(StatusEnum2.InProgress); //  inProgress
//We can use enum as a value and a data type
var notStartedStatus = StatusEnum.NotStart;
// notStartedStatus = 'foo' //is error
notStartedStatus = StatusEnum.Done;
