function changeBureau(input) {
  let bitCoinPrice = 1168;
  let chineseCoin = 0.15;
  let dollar = 1.76;
  let euro = 1.95;

  let bitCoinAmount = Number(input[0]);
  let chineseCoinAmount = Number(input[1]);
  let commision = Number(input[2]) / 100;

  let totalBitcoinPrice = bitCoinAmount * bitCoinPrice;
  let totalChineseCoinPrice = chineseCoinAmount * chineseCoin;
  let totalDollars = dollar * totalChineseCoinPrice;
  let totalEuros = totalDollars + totalBitcoinPrice;
  totalEuros /= euro;
  commision *= totalEuros;
  totalEuros = totalEuros - commision;
  console.log(totalEuros.toFixed(2));
}
changeBureau(['20', '5678', '2.4']);
