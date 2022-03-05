var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class must added method define in interface.
var User3 = /** @class */ (function () {
    // static property only accesseble with class itself.
    // not from instance 
    function User3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User3.prototype.changeUnchangebleName = function () {
        //   this.unchangeble = 'foo'
        //its error. readonly cannt modified
    };
    User3.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User3.maxAge = 50;
    User3.maxAge2 = 50;
    return User3;
}());
var monstar = new User3('Monstar', 'Dhaka');
console.log(monstar.getFullName());
//private mean variable can only change via function.
//NO direct access.
//JS has no private public and protected
//here monstar have no maxAge properety access
//becasue monstar in instance
//But User3.maxAge is directy accessable.
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User3));
var admin = new Admin('foo', 'bar');
console.log(admin.getFullName());
