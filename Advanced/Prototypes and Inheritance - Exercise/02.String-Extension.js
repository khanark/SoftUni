(function solve() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    } else {
      return this.toString();
    }
  };
  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    } else {
      return this.toString();
    }
  };
  String.prototype.isEmpty = function () {
    return this.length == 0 ? true : false;
  };
  String.prototype.truncate = function (n) {
    if (n < 4) {
      return ".".repeat(n);
    } else if (this.length < n) {
      console.log(this.length);
      return this.toString();
    } else if (this.length > n) {
      if (this.includes(" ")) {
        const words = this.split(" ");
        for (let i = 0; i < words.length; i++) {
          if (words.join(" ").length + 3 > n) {
            words.pop();
          }
        }
        return words.join(" ") + "...";
      } else {
        return this.slice(0, n - 3) + "...";
      }
    }
  };
  String.format = function (string, ...params) {
    let str = string;
    params.forEach((p, i) => {
      str = str.replace(`{${i}}`, p);
    });
    return str;
  };
})();
